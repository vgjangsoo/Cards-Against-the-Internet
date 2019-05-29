class Api::GamesController < ApplicationController
  # def index
  #   # URL: /api/games
  #   games = Game.all
  #   render json: games
  # end


  def create
    game = Game.new(game_params)
    # TODO: need to add lobby_id to games table
    lobby = Lobby.find(game_params[:lobby_id])
    if game.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        MessageSerializer.new(game)
      ).serializable_hash
      GamesChannel.broadcast_to lobby, serialized_data
      head :ok
    end
  end

  def update (data)
  # updating game state logic
  end
  
  private
  
  def game_params
    params.require(:game).permit(:gameState, :theme, :lobby_id)
  end
end
