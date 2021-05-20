require 'aws-sdk-s3'
class Api::PicturesController < ApplicationController
    # def index
    #     @imageable = find_imageable
    #     @pictures = @imageable.pictures
    #     render :index
    # end

    # def show
    #     @imageable_type = (params[:picture][:type])
    #     @id = (params[:id])
    #     @picture = @imageable_type.classify.constantize.find_by(id: @id)
    #     render `api/picture/show`
    # end

    def update
        if params[:picture][:type] == 'User'
            @user = User.find_by(id: params[:id])
            @picture = @user.pictures[0]
        else params[:picture][:type] == 'Album'
            @album = Album.find_by(id: params[:id])
            @picture = @album.pictures[0]
        end
        # @picture = Picture.find_by(imageable_id: @id)

        if @picture.photo.attached?
            @picture.photo.purge
            @picture.photo.attach(io: File.open(params[:picture][:photo].tempfile), filename: params[:picture][:photo].original_filename)
            
            render 'api/users/show'
        else
            @picture.photo.attach(io: File.open(params[:picture][:photo].tempfile), filename: params[:picture][:photo].original_filename)
            
            render 'api/users/show'
        end
    end

    def destroy
        @picture = Picture.find_by(params[:id])
        if @picture.delete!
            render notice: 'delete successful'
        end
    end

end