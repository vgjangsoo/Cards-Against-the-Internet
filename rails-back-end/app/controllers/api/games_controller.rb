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

  def update (data)
    # updating game state logic
    # Using broadcast
  end

  def show
    # HTTP GET /api/games/:id
    # To show individiual game id -> /api/games/:id 
    # HTTP GET request -> Send back game data for one room
    # lobbyID = params[:id]
    # puts `===== lobby ID is: #{lobbyID}` 
    
    # need to add a user to room, create all the user game data, and broadcast to everyone
    randomID = rand 1...100
    @newPlayer = User.create({
      username: "Guest#{randomID}",
      password: "123",
      isAdult: false,
      isBot: false,
      leaderboardPoints: 0
    })

    lobby = Lobby.find(params[:id])
    game_id = lobby.game_id
    game = Game.find(game_id)
    # game = lobby.game
    puts "game state"
    puts game.gameState.inspect
    # need to modify game.gameState to include new user cards, info...

    puts '==== Trying to change gameState ===='
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
    
    serialized_data = ActiveModelSerializers::Adapter::Json.new(
      GameSerializer.new(game)
      ).serializable_hash
      ActionCable.server.broadcast 'games_channel', serialized_data
      head :ok
      
    puts "========================AFTER BROADCAST"
    # NEVER USE render and broadcast in the same method, only use broadcast
      

    end
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