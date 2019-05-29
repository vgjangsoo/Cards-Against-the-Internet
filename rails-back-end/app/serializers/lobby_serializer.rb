class LobbySerializer < ActiveModel::Serializer
  attributes :id, :theme, :game_id, :roomStatus, :currentPlayers, :maxPlayer 
  has_many :games
end

