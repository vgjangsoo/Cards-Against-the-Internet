class LobbiesChannel < ApplicationCable::Channel
  def subscribed
    # lobby channel
    stream_from "lobbies_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
