class Api::LobbiesController < ApplicationController

    def index
        lobbies = Lobby.all
        render json: lobbies
    end

    def create
        lobby = Lobby.new(lobby_params)
        if lobby.save
            serialized_data = ActiveModelSerializers::Adapter::Json.new(
            LobbySerializer.new(lobby)
            ).serializable_hash
            ActionCable.server.broadcast 'lobbies_channel', serialized_data
            head :ok
        end
    end
        
    private
        
    def lobby_params
        params.require(:lobby).permit({
            :id, 
            :game_id,
            :maxPlayer,
            :currentPlayers,
            :theme,
            :roomStatus
        })
    end
end
