class Song < ApplicationRecord
    validates :title, presence: true

    has_one_attached :song
    has_one_attached :photo
end
