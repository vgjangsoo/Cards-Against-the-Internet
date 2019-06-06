class Api::GamesController < ApplicationController

  def index
    # URL: /api/games
    games = Game.all
    render json: games
  end

  def create
    # create new lobby entry first

    lobby = Lobby.new(lobby_params)
    # will need to update later for game_id
    lobby.game_id = nil
    # #########
    lobby.roomStatus = 'Waiting...'
    lobby.currentPlayers = 0

    lobby.save!
        # send new room data back as WS broadcast
        # serialized_data = ActiveModelSerializers::Adapter::Json.new(
        # LobbySerializer.new(lobby)
        # ).serializable_hash
        # ActionCable.server.broadcast 'lobbies_channel', serialized_data



    @game = Game.new(game_params)

    
    # HTTP POST request -> /api/games
    # @creator = User.find_by(username: 'Sam1')
    @deck = Deck.find_by(theme: 'Base')
    # in update action, can use this to referennce to cards, not used at creation
    @questionCards = @deck.cards.where(isQuestion: true)
    @answerCards = @deck.cards.where(isQuestion: false)

    @game.gameState = {
      maxRound: @game.maxRound,
      creator: nil,
      deck_id: @deck.id,
      isEveryoneDeck: true,
      gameInfo: {
        status: 'Waiting for players to join game...',
        currentPlayers: 0,
        maxPlayers: @game.maxPlayers,
        currentRound: 0,
        currentQuestioner: nil,
        selectedQuestion: nil,
        selectedAnswer: nil,
        roundWinner: nil
      },
      playersInfo: {
        users: []          
      }
    }

    # link the game_id to lobby here to avoid lobbies table not being saved yet in DB
    # @newLobbyRoom = Lobby.find_by(theme: @game.theme)
    # puts '===================================='
    # puts 'NEW ROOM LOBBY ID RELATED TO GAMES'
    # puts @newLobbyRoom.id
    @game.lobby_id = lobby.id

    if @game.save!

      # link the game_id to lobby table
      lobby.game_id = @game.id
      lobby.save!
      broadcast_to_lobby (lobby)
      # broadcast the new game info (not really need? since only creating tables in DB)
      # serialized_data = ActiveModelSerializers::Adapter::Json.new(
      #   MessageSerializer.new(@game)
      # ).serializable_hash
      # GamesChannel.broadcast_to @game, serialized_data
      head :ok
    end
  end
  
  
  def addUser
    # post to add user when joining game, maps to Ready? button
    # POST api/games/:id/addUser
    puts "========INCOMING COOKIE IS ========="
    puts request.cookies["currentUser"]
    objCookies = {}

    if request.cookies["currentUser"]
      objCookies = ActiveSupport::JSON.decode(request.cookies["currentUser"])
    end

    if objCookies["email"]
      @newPlayer = User.find_by_email!(objCookies["email"])
      puts "found user is: #{@newPlayer.username}"
    # else 

    #   puts "======== addUser method ========="
    #   randomID = rand 1...100
    #   @newPlayer = User.create!({
    #     username: "Guest ##{randomID}",
    #     email: "guest#{randomID}@test.com",
    #     password_digest: '12345',
    #     isAdult: false,
    #     isBot: false,
    #     leaderboardPoints: 0
    #   })

    #   puts "========finish adding a user ========="
    end



    lobby = Lobby.find(params[:id])
    game_id = lobby.game_id
    game = Game.find(game_id)

    puts '==== Trying to change gameState with new user ===='
    game.gameState["playersInfo"]["users"].push({
      id: @newPlayer.id,
      roundPoints: 0,
      status: 'ready',
      questionCards: [],
      answerCards: [],
      selectedCard: nil,
      username: @newPlayer.username
    })

    currentPlayers = game.gameState["gameInfo"]["currentPlayers"] 
    puts "currentPlayers before add: #{currentPlayers}"
    currentPlayers = currentPlayers + 1
    puts "currentPlayers After add: #{currentPlayers}"
    
    game.gameState["gameInfo"]["currentPlayers"] = currentPlayers

    puts '==== finished update gameState table ===='

    #  if first time joining room should update as creator
    if game.gameState["creator"] == nil
      game.gameState["creator"] = @newPlayer.id
      game.gameState["gameInfo"]["currentQuestioner"] = @newPlayer.id
    end
    
    lobby.currentPlayers += 1

    if lobby.save!
      # send new room data back as WS broadcast
      broadcast_to_lobby(lobby)
      puts "=====after broadcast to lobby======"
    end

    if game.save!
      puts "========================BEFORE BROADCAST"
      broadcast_to_game(game)
      puts "========================AFTER BROADCAST"
    end

  end

  def update
    # updating game state logic
    # incoming HTTP put/patch request, filter out by type
    # outgoing: Using broadcast WS

    # dont really need to have incoming gameState, can gram REAL gameState from DB, 
    # then update certain sections and broadcast good version to everyone

    type = params[:type]
    gameState = params[:gameState]
    puts "==== incoming type ==="
    puts type
    # puts "==== incoming gameState ==="
    # puts gameState

    lobby = Lobby.find(params[:id])
    game_id = lobby.game_id
    game = Game.find(game_id)

    if (type === 'start-button-pressed')
      # logic to modify gameState
      puts "====== inside start-button-pressed filter"
      # puts gameState
      game["gameState"]["gameInfo"]["status"] = 'Waiting for questioner to select card'
      game["gameState"]["gameInfo"]["currentRound"] = 1

      # assigning cards to each player (including questioner)
      # find number of users in gameState
      numPlayers = game["gameState"]["playersInfo"]["users"].size
      puts "numPlayers: #{numPlayers}"

      # find all answer cards in cards table
      @answerCards = Card.where(isQuestion: false)  
      puts "answerCards: #{@answerCards}"
      puts "answerCards size: #{@answerCards.size}"
      cardSize = @answerCards.size
      
      # randomly assign 5 card.context to each user
      # puts @answerCards[0].content
      playerNum = 0
      while playerNum < numPlayers 
        
        for i in 0..4
          cardNum = rand 1...cardSize
          while game["gameState"]["playersInfo"]["users"][playerNum]["answerCards"].include? (@answerCards[cardNum].content)
            # generate another random cardNum to try again
            cardNum = rand 1...cardSize
          end
          game["gameState"]["playersInfo"]["users"][playerNum]["answerCards"].push(@answerCards[cardNum].content)
          game["gameState"]["playersInfo"]["users"][playerNum]["status"] = 'waiting'
          puts game["gameState"]["playersInfo"]["users"][playerNum]["answerCards"]
        end
        playerNum += 1
      end

      # find all question cards in questions table
      questionerID = game["gameState"]["gameInfo"]["currentQuestioner"]
      puts "questionerID: #{questionerID}"
      usersSize = game["gameState"]["playersInfo"]["users"].size

      @questionCards = Card.where(isQuestion: true)  
      puts "questionCards: #{@questionCards}"
      puts "questionCards size: #{@questionCards.size}"
      qcardSize = @questionCards.size

      # loop through players.users array to find the questioner ID, then push in 3 question cards
      for k in 0..usersSize-1
        qcardNum = rand 1...qcardSize
        quser = game["gameState"]["playersInfo"]["users"][k]
        if quser["id"] === questionerID
          for m in 0..2
            while quser["questionCards"].include? (@questionCards[qcardNum].content)
              # generate another random cardNum to try again
              qcardNum = rand 1...qcardSize
            end
            quser["questionCards"].push(@questionCards[qcardNum].content)
          end
          puts "========== all entered question cards"
          puts quser["questionCards"]
        end
      end
      
      ########### all start conditions should be done before this
      # game["gameState"] = gameState
      game.save!

      puts "====== end of start-button-pressed filter"
    end

    if (type === 'question-card-selected')
      # question play card button is clicked, need to get the question content from query params?
      puts "=== GAME: type = question-card-selected ==== "
      puts params['question']
      puts params['userID']
      question = params['question'].to_s
      userID = params['userID'].to_i
      usersArray = game["gameState"]["playersInfo"]["users"]
      # userIndex = params['userIndex'].to_i
      
      # need to find the users[index] in order to set the correct user
      userIndex = usersArray.index { |user| user["id"] === userID }
      puts "userIndex is #{userIndex}"

      game["gameState"]["gameInfo"]["status"] = "Question selected, please choose an answer"
      game["gameState"]["gameInfo"]["selectedQuestion"] = question
      game["gameState"]["playersInfo"]["users"][userIndex]["selectedCard"] = question
      game["gameState"]["playersInfo"]["users"][userIndex]["status"] = 'ready'

      # need to modify the user status of non questioner, only works for 1 round right now

      for index in 0..(usersArray.length-1)
        if index != userIndex
          game["gameState"]["playersInfo"]["users"][index]["status"] = 'selecting'
        end

      end


      # game["gameState"]["playersInfo"]["users"][userIndex+1]["status"] = 'selecting'
      # game["gameState"]["playersInfo"]["users"][userIndex+2]["status"] = 'selecting'

      game.save!
      puts "=== end of type - question-card-selected ==== "

    end

    if (type === 'answer-card-selected')
      # need to check after changing gameState how many answer cards have been select,
      # if all answers are selected, then add a condition/flag to go to next step?

      puts "=== GAME: type = answer-card-selected ==== "
      puts params['answer']
      puts params['userID']
      answer = params['answer'].to_s
      userID = params['userID'].to_i
      usersArray = game["gameState"]["playersInfo"]["users"]
      # userIndex = params['userIndex'].to_i
      
      # need to find the users[index] in order to set the correct user
      userIndex = usersArray.index { |user| user["id"] === userID }
      puts "userIndex is #{userIndex}"

      # need to show number of answers have been selected
      game["gameState"]["gameInfo"]["status"] = "Answer have been submitted by User ID: #{userID}"
      game["gameState"]["playersInfo"]["users"][userIndex]["selectedCard"] = answer
      game["gameState"]["playersInfo"]["users"][userIndex]["status"] = 'ready'

      # add a loop to see if all users have a selected card, then set game status msg to something else
      # use a arr.each loop to check the if selectedCard"] != nil
 
      numAnswers = 0
      usersArray.each { |user| 
        if user["selectedCard"] != nil
          numAnswers += 1
        end
      }

      puts "Number of total answers are: #{numAnswers}"

      if numAnswers == game["gameState"]["gameInfo"]["currentPlayers"]
        game["gameState"]["gameInfo"]["status"] = "All answers have been submitted, picking best answer"
      end

      # all gamestate changes should be done before this line
      game.save!
      puts "=== end of type - answer-card-selected ==== "

      
    end    
    
    if (type === 'questioner-picked-answer-card')
      # given all selected answer cards are displayed, quesioner have picked a winning answer
      puts "=== GAME: type = questioner-picked-answer-card ==== "
      puts params['answer']
      puts params['userID']
      answer = params['answer'].to_s
      userID = params['userID'].to_i
      usersArray = game["gameState"]["playersInfo"]["users"]
      
      roundWinner = "TEST"
      # roundWinnerID = -1
      # also have to find who is the winner with that answer
      usersArray.each { |user| 
        if user["selectedCard"] === answer
          roundWinner = user["id"].to_i
        end
      }

      # need to find the users[index] in order to set the correct user for roundPoints
      roundWinnerIndex = usersArray.index { |user| user["id"] === roundWinner }
      puts "roundWinnerIndex is #{roundWinnerIndex}"

      # add points for the winner answerer (roundWinner)
      game["gameState"]["playersInfo"]["users"][roundWinnerIndex]["roundPoints"] += 1

      # set the winning answer and game status
      game["gameState"]["gameInfo"]["status"] = "The best answer is..."
      game["gameState"]["gameInfo"]["selectedAnswer"] = answer
      game["gameState"]["gameInfo"]["roundWinner"] = roundWinner

      # all gamestate changes should be done before this line
      game.save!
      puts "=== end of type - questioner-picked-answer-card ==== "

    end

    if ( type === 'next-round')
      puts "=== GAME: type = next-round ==== "
      puts params['userID']
      userID = params['userID'].to_i
      usersArray = game["gameState"]["playersInfo"]["users"]

      # need to create entry in rounds table for history
      
      # need to switch answer and questioner 
      newQuestionerID = game["gameState"]["gameInfo"]["roundWinner"]
      oldQuestionerID = game["gameState"]["gameInfo"]["currentQuestioner"]
      
      game["gameState"]["gameInfo"]["currentQuestioner"] = newQuestionerID.to_i

      # need to give the new questioner 3 black cards and clear out the answer cards of the previous questioner
      # step 1: assign new answer cards to all players
            
      # assigning cards to each player (including questioner)
      # find number of users in gameState
      numPlayers = game["gameState"]["playersInfo"]["users"].size
      puts "numPlayers: #{numPlayers}"

      # find all answer cards in cards table
      @answerCards = Card.where(isQuestion: false)  
      puts "answerCards: #{@answerCards}"
      puts "answerCards size: #{@answerCards.size}"
      cardSize = @answerCards.size
      
      # randomly assign 5 card.context to each user
      # puts @answerCards[0].content
      playerNum = 0
      while playerNum < numPlayers 
        # clear out previous answer cards and question cards
        game["gameState"]["playersInfo"]["users"][playerNum]["answerCards"] = []
        game["gameState"]["playersInfo"]["users"][playerNum]["questionCards"] = []
        game["gameState"]["playersInfo"]["users"][playerNum]["selectedCard"] = nil
        game["gameState"]["playersInfo"]["users"][playerNum]["status"] = 'selecting'

        for i in 0..4
          cardNum = rand 1...cardSize
          while game["gameState"]["playersInfo"]["users"][playerNum]["answerCards"].include? (@answerCards[cardNum].content)
            # generate another random cardNum to try again
            cardNum = rand 1...cardSize
          end
          game["gameState"]["playersInfo"]["users"][playerNum]["answerCards"].push(@answerCards[cardNum].content)
          puts game["gameState"]["playersInfo"]["users"][playerNum]["answerCards"]
        end
        playerNum += 1
      end


      # step 2: find the new questioner and assign 3 question cards
      # find all question cards in questions table
      # questionerID = game["gameState"]["gameInfo"]["currentQuestioner"]

      
      puts "New QuestionerID: #{newQuestionerID}"
      usersSize = game["gameState"]["playersInfo"]["users"].size

      @questionCards = Card.where(isQuestion: true)  
      puts "questionCards: #{@questionCards}"
      puts "questionCards size: #{@questionCards.size}"
      qcardSize = @questionCards.size

      # loop through players.users array to find the questioner ID, then push in 3 question cards
      for k in 0..usersSize-1
        qcardNum = rand 1...qcardSize
        quser = game["gameState"]["playersInfo"]["users"][k]
        if quser["id"] === newQuestionerID 
          for m in 0..2
            while quser["questionCards"].include? (@questionCards[qcardNum].content)
              # generate another random cardNum to try again
              qcardNum = rand 1...qcardSize
            end
            quser["questionCards"].push(@questionCards[qcardNum].content)
          end
          puts "=== assigned new question cards to next questioner ==="
          puts quser["questionCards"]
        end
      end 

      # need to change gameState data to next round and clear previous round's info in gameInfo, and users[]
      game["gameState"]["gameInfo"]["roundWinner"] = nil
      game["gameState"]["gameInfo"]["selectedQuestion"] = nil
      game["gameState"]["gameInfo"]["selectedAnswer"] = nil
      if (game["gameState"]["gameInfo"]["currentRound"] === game["gameState"]["maxRound"])
        # round is 5, maxRound = 5. End of game
        game["gameState"]["gameInfo"]["status"] = "Game Over! Game have ended!"
      else
        # round is 0,1,2,4
        game["gameState"]["gameInfo"]["status"] = "Waiting for questioner to select card"
        game["gameState"]["gameInfo"]["currentRound"] += 1
      end
            

      # all gamestate changes should be done before this line
      game.save!
      puts "=== end of type - next-round ==== "
    end


    # need to do broadcast call here
    broadcast_to_game(game)
  end

  def show
    # HTTP GET /api/games/:id
    # To show individiual game id -> /api/games/:id 
    # HTTP GET request -> Send back game data for one room
    # lobbyID = params[:id]
    # puts `===== lobby ID is: #{lobbyID}` 
    
    lobby = Lobby.find(params[:id])
    game_id = lobby.game_id
    game = Game.find(game_id)
    
    # broadcast_to_game(game)
    # puts "===== SHOW METHOD finishshed broadcasting ======"

    render json: game

  end

  def broadcast_to_game (data)
    # need to broadcast to players currently in the room to show updates
    serialized_data = ActiveModelSerializers::Adapter::Json.new(
    GameSerializer.new(data)
    ).serializable_hash
    ActionCable.server.broadcast 'games_channel', serialized_data
    head :ok
  
  end

  def broadcast_to_lobby (data)
    # send new room data back as WS broadcast
    serialized_data = ActiveModelSerializers::Adapter::Json.new(
    LobbySerializer.new(data)
    ).serializable_hash
    ActionCable.server.broadcast 'lobbies_channel', serialized_data
    head :ok
  end

  
  private
  
  def game_params
    params.require(:game).permit(:gameState, :theme, :lobby_id, :maxRound, :maxPlayers)
  end

  def lobby_params
    params.permit( 
        :game_id,
        :maxPlayer,
        :currentPlayers,
        :theme,
        :roomStatus
    )
  end

end