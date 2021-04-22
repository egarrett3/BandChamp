class Picture < ApplicationRecord
    belongs_to :imageable, polymorphic: true
    has_one_attached :photo

    # validate :picture_attachment_validation, on: :create

    # custom validation to ensure pictures attach
    # def picture_attached?
    #     picture.photo.attached?
    # end

    def carousel_size
        self.picture.photo.variant(resize: '400X400').processed_url
    end

end
