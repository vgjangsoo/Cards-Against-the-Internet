class GameSerializer < ActiveModel::Serializer
  attributes :id, :gameState, :theme
  has_many :users
end


