class Api::LobbiesController < ApplicationController

    def index
        # URL: GET /api/lobbies
        lobbies = Lobby.all
        render json: lobbies
    end

    def create
        # URL POST /api/lobbies
        lobby = Lobby.new(lobby_params)
        # will need to update later for game_id
        lobby.game_id = nil
        # #########
        lobby.roomStatus = 'Waiting...'
        lobby.currentPlayers = 1

        if lobby.save
            serialized_data = ActiveModelSerializers::Adapter::Json.new(
            LobbySerializer.new(lobby)
            ).serializable_hash
            ActionCable.server.broadcast 'lobbies_channel', serialized_data
            head :ok
        end
        # render or send lobby
    end
        
    private
        
    def lobby_params
        params.require(:lobby).permit( 
            :game_id,
            :maxPlayer,
            :currentPlayers,
            :theme,
            :roomStatus
        )
    end
end
