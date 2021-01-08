class Song < ApplicationRecord
    default_scope { order(id: :asc) }
    validates :title, presence: true
    validates :id, uniqueness: true
    # validate :song_attachment_validation, on: :create

    before_destroy :purge_attachment, prepend: true

    has_one_attached :song
    belongs_to :album

    #custom validation checking for song attachment 
    
    def song_attachment_validation
        bool = true
        unless song_attached?
            errors.add(:song,'must have song attached')
            bool = false
        end
        bool
    end
    
    private

    def purge_attachment
        song.purge
    end
    
    def song_attached?
        song.attached?
    end
end
