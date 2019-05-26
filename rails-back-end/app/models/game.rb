class Game < ApplicationRecord
    have_many :rounds
    has_one :deck 

    have_many :usergameinfos
    has_many :users, through: :usergameinfos

end
