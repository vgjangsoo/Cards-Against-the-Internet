class GameSerializer < ActiveModel::Serializer
  attributes :id, :theme, :roomStatus, :gameState
end


