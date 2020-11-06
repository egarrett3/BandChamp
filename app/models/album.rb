class Album < ApplicationRecord
    validates :title, presence: true

    has_one_attached :song
    has_many :pictures, as: :imageable
    has_many :songs
    
end
