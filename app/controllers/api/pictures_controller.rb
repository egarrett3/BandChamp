class Api::PicturesController < ApplicationController
    # def index
    #     @imageable = find_imageable
    #     @pictures = @imageable.pictures
    #     render :index
    # end

    def show
        @imageable = Picture.find(picture_params)
        @pictures = @imageable.pictures[0]
        render :show
    end

    def create 
        @picture = @imageable.pictures.new(name: params[:name])
        debugger
        if @picture.save
            debugger
            render json: @picture, notice: 'picture successfully created'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @picture = Picture.find_by(params[:id])
        if @picture.delete!
            render notice: 'delete successful'
        end
    end

    private

    def picture_params
        params.require(:picture).permit(:name,:id)
    end

end