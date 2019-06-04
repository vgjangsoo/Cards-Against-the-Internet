class Api::GamesController < ApplicationController

  def index
    # URL: /api/games
    games = Game.all
    render json: games
  end

  def create
    @game = Game.new(game_params)

    
    # HTTP POST request -> /api/games
    @creator = User.find_by(username: 'Sam1')
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
    @newLobbyRoom = Lobby.find_by(theme: @game.theme)
    puts '===================================='
    puts 'NEW ROOM LOBBY ID RELATED TO GAMES'
    puts @newLobbyRoom.id
    @game.lobby_id = @newLobbyRoom.id

    if @game.save!

      # link the game_id to lobby table
      @newLobbyRoom.game_id = @game.id
      @newLobbyRoom.save!
      # broadcast the new game info (not really need? since only creating tables in DB)
      # serialized_data = ActiveModelSerializers::Adapter::Json.new(
      #   MessageSerializer.new(@game)
      # ).serializable_hash
      # GamesChannel.broadcast_to @game, serialized_data
      # head :ok
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
      @newPlayer = User.find_by_email(objCookies["email"])
    else 

      puts "========INSIDE addUser method ========="
      randomID = rand 1...100
      @newPlayer = User.create!({
        username: "Guest#{randomID}",
        email: "guest#{randomID}@test.com",
        password_digest: '12345',
        isAdult: false,
        isBot: false,
        leaderboardPoints: 0
      })

      puts "========finish adding a user ========="
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
      selectedCard: nil
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

    type = params[:type]
    gameState = params[:gameState]
    puts "==== incoming type ==="
    puts type
    puts "==== incoming gameState ==="
    puts gameState

    lobby = Lobby.find(params[:id])
    game_id = lobby.game_id
    game = Game.find(game_id)

    if (type === 'start-button-pressed')
      # logic to modify gameState
      puts "====== inside start-button-pressed filter"
      # returnData = gameState
      puts gameState
      gameState["gameInfo"]["status"] = 'Waiting for questioner to select card'
      gameState["gameInfo"]["currentRound"] = 1

      # assigning cards to each player (including questioner)
      # find number of users in gameState
      numPlayers = gameState["playersInfo"]["users"].size
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
          while gameState["playersInfo"]["users"][playerNum]["answerCards"].include? (@answerCards[cardNum].content)
            # generate another random cardNum to try again
            cardNum = rand 1...cardSize
          end
          gameState["playersInfo"]["users"][playerNum]["answerCards"].push(@answerCards[cardNum].content)
          puts gameState["playersInfo"]["users"][playerNum]["answerCards"]
        end
        playerNum += 1
      end

      # find all question cards in questions table
      questionerID = gameState["gameInfo"]["currentQuestioner"]
      puts "questionerID: #{questionerID}"
      usersSize = gameState["playersInfo"]["users"].size

      @questionCards = Card.where(isQuestion: true)  
      puts "questionCards: #{@questionCards}"
      puts "questionCards size: #{@questionCards.size}"
      qcardSize = @questionCards.size

      # loop through players.users array to find the questioner ID, then push in 3 question cards
      for k in 0..usersSize-1
        qcardNum = rand 1...qcardSize
        quser = gameState["playersInfo"]["users"][k]
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
      game["gameState"] = gameState
      game.save!

      puts "====== end of start-button-pressed filter"
    end

    if (type === 'answerer-selected-card')
      # logic to modify gameState
    
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

end