class User < ApplicationRecord
    has_many :user_game_infos
    has_many :games, through: :user_game_infos
end
