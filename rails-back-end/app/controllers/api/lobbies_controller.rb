class Api::LobbiesController < ApplicationController

    def index
        # URL: GET /api/lobbies
        lobbies = Lobby.all
        # just for testing passing values in axios url query selector
        puts params['hello']
        puts params['hello']
        render json: lobbies
    end

    def create
        # URL POST /api/lobbies
        lobby = Lobby.new(lobby_params)
        # will need to update later for game_id
        lobby.game_id = nil
        # #########
        lobby.roomStatus = 'Waiting...'
        lobby.currentPlayers = 0

        if lobby.save
            # send new room data back as WS broadcast
            serialized_data = ActiveModelSerializers::Adapter::Json.new(
            LobbySerializer.new(lobby)
            ).serializable_hash
            ActionCable.server.broadcast 'lobbies_channel', serialized_data
            head :ok
        end
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
