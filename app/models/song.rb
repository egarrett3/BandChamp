class Song < ApplicationRecord
    validates :title, presence: true
    # validate :song_attachment_validation, on: :create

    has_one_attached :song
    has_many :pictures, as: :imageable
    belongs_to :album

    #custom validation checking for song attachment 

    def song_attached?
        song.attached?
    end

    def song_attachment_validation
        bool = true
        unless song_attached?
            errors.add(:song,'must have song attached')
            bool = false
        end
        bool
    end
    
end
