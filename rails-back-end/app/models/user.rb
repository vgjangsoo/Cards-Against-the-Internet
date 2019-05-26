class User < ApplicationRecord
    have_many :usergameinfos
    has_many :games, through: :usergameinfos
end
