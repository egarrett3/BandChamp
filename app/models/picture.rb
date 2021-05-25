class Picture < ApplicationRecord
    belongs_to :imageable, polymorphic: true
    has_one_attached :photo

    # validate :picture_attachment_validation, on: :create

    # custom validation to ensure pictures attach
    # def picture_attached?
    #     picture.photo.attached?
    # end
    def main_page_size(params)
        resized_image = MiniMagick::Image.read(params[:picture][:photo].tempfile)
        resized_image = resized_image.resize "350x250"
    end

    def resize_image 
        width,height = self.check_dimensions

        if height > 900 && width > 900
            image = self.resized_image
            if self.photo.attached?
                self.photo.purge
            end
            self.photo.attach(io: File.open(image.path), filename: self.name)
        end
    end

    def check_dimensions
        debugger
        image = MiniMagick::Image.open(self.photo.service_url)
        image.dimensions
    end

    def resized_image
        debugger
        image = MiniMagick::Image.open(self.photo.service_url)
        image.resize("900X900")
        image
    end

end
