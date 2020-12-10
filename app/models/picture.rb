class Picture < ApplicationRecord
    belongs_to :imageable, polymorphic: true
    has_one_attached :photo

    validate :picture_attachment_validation, on: :create

    # custom validation to ensure pictures attach
    def picture_attached?
        picture.photo.attached?
    end

    def picture_attachment_validation

    end

end
