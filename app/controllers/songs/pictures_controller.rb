class Api::Songs::PicturesController < Api::PicturesController
    before_action :set_imageable

    private

    def set_imageable
        debugger
        @imageable = Song.find(params[:song_id])
    end
end