require 'aws-sdk-s3'
class Api::PicturesController < ApplicationController
    # def index
    #     @imageable = find_imageable
    #     @pictures = @imageable.pictures
    #     render :index
    # end

    # s3 = Aws::S3::Resource.new(region: 'us-east-1')
    # file = params[:photo]
    # bucket = 'active-storage-banchamp-pro'
    # name = File.basename(file)
    # obj = s3.bucket(bucket).object(name)
    # obj.upload_file(file)

    def show
        @imageable = Picture.find_by(params[:picture][:user_id])
        @picture = @imageable.pictures[0]
        render :show
    end

    def update
        if params[:picture][:type] == 'User'
            @user = User.find_by(id: params[:id])
            @id = @user.pictures[0].imageable_id
        else params[:picture][:type] == 'Song'
            @song = Song.find_by(id: params[:id])
            @id = @song.pictures[0].imageable_id
        end
        @picture = Picture.find_by(imageable_id: @id)

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