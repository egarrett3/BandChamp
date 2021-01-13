require 'aws-sdk-s3'
class Api::PicturesController < ApplicationController
    # def index
    #     @imageable = find_imageable
    #     @pictures = @imageable.pictures
    #     render :index
    # end

    def show
        @imageable = Picture.find_by(params[:picture][:id])
        @picture = @imageable.pictures[0]
        debugger
        @attached_obj = find_imageable_type.find_by(id: params[:id])
        
        render 'api/users/'
    end

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

    def find_imageable_type
        params.each do |name,value|
            if name =~ /type$/
                return $1.classify.constantize
            end
        end
        nil
    end

end