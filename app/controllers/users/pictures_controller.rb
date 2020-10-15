class Api::Users::PicturesController < Api::PicturesController
    before_action :set_imageable

    private

    def set_imageable
        debugger
        @imageable = User.find(params[:user_id])
    end
end