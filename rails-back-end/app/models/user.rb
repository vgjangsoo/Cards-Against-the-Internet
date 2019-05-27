class User < ApplicationRecord
    has_many :usergameinfos
    has_many :games, through: :usergameinfos
end
