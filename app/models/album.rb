class Album < ApplicationRecord
    validates :title, presence: true
    default_scope { order(id: :asc) }
    
    # has_one_attached :song
    has_many :pictures, as: :imageable, dependent: :destroy
    has_many :songs, dependent: :destroy

    before_destroy :purge_attachment, prepend: true

    belongs_to :user,
      primary_key: :id,
      foreign_key: :artist_id,
      class_name: :User

    has_many :albums,
      through: :user,
      source: :albums

    def purge_attachment
      self.pictures[0].photo.purge
    end
    
end
