class GamesChannel < ApplicationCable::Channel
  # def subscribed
  #   # game room channel
  #   stream_from "games_channel"
  # end

  def subscribed
    # lobby = Lobby.find(params[:lobby])
    # stream_for lobby
    # maybe #{params[:id]} is not finding the right thing?

    # stream_from "game_channel_#{params[:id]}"
    stream_from "games_channel#{params[:room]}"
  end
  
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    # need to remove user from games table and update?
    # lobby = Lobby.find(params[:id])
    # game_id = lobby.game_id
    # game = Game.find(game_id)


  end

end
