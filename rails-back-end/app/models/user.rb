class User < ApplicationRecord
    has_secure_password
    
    # has_many :user_game_infos
    # has_many :games, through: :user_game_infos

    validates :email, presence: true
    validates :username, presence: true
 
end
