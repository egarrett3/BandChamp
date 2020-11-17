class Album < ApplicationRecord
    validates :title, presence: true

    has_one_attached :song
    has_many :pictures, as: :imageable
    has_many :songs

    belongs_to :user,
      foreign_key: :artist_id
    
end
