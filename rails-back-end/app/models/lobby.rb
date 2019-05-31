class Lobby < ApplicationRecord
    has_many :games
    # only will show 1 game room 
    # belongs_to :game
end
