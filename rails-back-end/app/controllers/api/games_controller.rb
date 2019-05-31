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
    @questionCards = @deck.cards.where(isQuestion: true)
    @answerCards = @deck.cards.where(isQuestion: false)

    @game.gameState = {
        maxRound: @game.maxRound,
        creator: @creator.id,
        deck_id: @deck.id,
        isEveryoneDeck: true,
        gameInfo: {
            status: 'Waiting for players to join game...',
            currentPlayers: 1,
            maxPlayers: @game.maxPlayers,
            currentRound: 0,
            currentQuestioner: @creator.id,
            selectedQuestion: nil,
            selectedAnswer: nil,
            roundWinner: nil
        },
        playersInfo: {
            users: [
              {
                id: @creator.id,
                roundPoints: 0,
                status: 'waiting',
                questionCards: [@questionCards[0].id, @questionCards[1].id, @questionCards[2].id],
                answerCards: [@answerCards[0].id, @answerCards[1].id, @answerCards[2].id, @answerCards[3].id, @answerCards[4].id],
                selectedCard: nil
              }
            ]          
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
    # To show individiual game id -> /api/games/:id 
    # HTTP GET request -> Send back game data for one room
    # lobbyID = params[:id]
    # puts `===== lobby ID is: #{lobbyID}` 
    
    # need to add a user to room, create all the user game data, and broadcast to everyone
    

    lobby = Lobby.find(params[:id])
    game_id = lobby.game_id
    game = Game.find(game_id)
    # game = lobby.game
    render json: game

  end
  
  private
  
  def game_params
    params.require(:game).permit(:gameState, :theme, :lobby_id, :maxRound, :maxPlayers)
  end

end