class GameSerializer < ActiveModel::Serializer
  attributes :id, :theme, :gameState, :lobby_id
end


