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
  end

end
