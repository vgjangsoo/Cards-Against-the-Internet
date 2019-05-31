class Game < ApplicationRecord
    has_many :rounds
    has_one :deck
    # only work in 1-1 relationship 
    # has_one :lobby

    belongs_to :lobby

    # has_many :user_game_infos
    # has_many :users, through: :user_game_infos
end
