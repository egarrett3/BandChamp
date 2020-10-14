class Song < ApplicationRecord
    validates :title, presence: true

    has_one_attached :song
    has_many :pictures, as: :imageable
    
end
