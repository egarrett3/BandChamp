require 'aws-sdk-s3'
class Api::PicturesController < ApplicationController
    # def index
    #     @imageable = find_imageable
    #     @pictures = @imageable.pictures
    #     render :index
    # end

    def show
        @imageable = Picture.find_by(params[:picture][:user_id])
        @picture = @imageable.pictures[0]
        render 'api/users/profile'
    end

    def update
        if params[:picture][:type] == 'User'
            @user = User.find_by(id: params[:id])
            @picture = @user.pictures[0]
        else params[:picture][:type] == 'Album'
            @song = Song.find_by(id: params[:id])
            @picture = @song.pictures[0]
        end
        # @picture = Picture.find_by(imageable_id: @id)

        if @picture.photo.attached?
            @picture.photo.purge
            @picture.photo.attach(io: File.open(params[:picture][:photo].tempfile), filename: params[:picture][:photo].original_filename)
            render 'api/users/profile'
        else
            @picture.photo.attach(io: File.open(params[:picture][:photo].tempfile), filename: params[:picture][:photo].original_filename)
            render 'api/users/profile'
        end
    end

    def destroy
        @picture = Picture.find_by(params[:id])
        if @picture.delete!
            render notice: 'delete successful'
        end
    end


end