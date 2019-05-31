class Api::ConversationsController < ApplicationController
    def index
      # GET api/conversations
      conversations = Conversation.all
      render json: conversations
    end
  
    def create
      # receiving as http POST api/conversations
      conversation = Conversation.new(conversation_params)
      if conversation.save
        # after saving, send back as WS broadcast
        serialized_data = ActiveModelSerializers::Adapter::Json.new(
          ConversationSerializer.new(conversation)
        ).serializable_hash
        ActionCable.server.broadcast 'conversations_channel', serialized_data
        head :ok
      end
    end

    def update (data)
    # updating game state logic
    end
    
    private
    
    def conversation_params
      params.require(:conversation).permit(:title)
    end
  end