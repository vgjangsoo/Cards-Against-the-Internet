class MessagesChannel < ApplicationCable::Channel
  def subscribed

    # Gameroom
    conversation = Conversation.find(params[:conversation])
    # Sending an conversation object to conversation channel
    stream_for conversation
  end

  def unsubscribed
  end
end
