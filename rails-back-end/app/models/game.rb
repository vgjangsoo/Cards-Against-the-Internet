class Game < ApplicationRecord
    has_many :rounds
    has_one :deck 

    has_many :usergameinfos
    has_many :users, through: :usergameinfos

end
