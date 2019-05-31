class Api::GamesController < ApplicationController

  def index
    # URL: /api/games
    games = Game.all
    render json: games
  end

  def create
    @game = Game.new(game_params)
    # TODO: need to add lobby_id to games table
    @newLobbyRoom = Lobby.last
    @game.lobby_id = @newLobbyRoom.id
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

    if @game.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        MessageSerializer.new(@game)
      ).serializable_hash
      GamesChannel.broadcast_to @game, serialized_data
      head :ok
    end
  end

  def update (data)
    # updating game state logic
    # Using broadcast
  end

  def show
    # To show individiual game id -> /api/games/:id 
    # HTTP GET request -> Send back game data for one room

    game = Game.find(params[:id])
    render json: game
  end

  
  private
  
  def game_params
    params.require(:game).permit(:gameState, :theme, :lobby_id, :maxRound)
  end

end