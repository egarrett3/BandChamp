class Api::AlbumsController < ApplicationController

    def index
        @albums = Album.all
        render 'api/albums/index'
    end

    def show 
        @album = Album.find_by(id: params[:id])
        @songs = @album.songs
        
        @album.pictures[0].resize_image
        # test for proper h,w then write resize image function

        if @songs.empty?
            @no_song = true;
        else
            @no_song = false;
        end
        render 'api/albums/show'
    end

    def create
        @album = Album.create(title: params[:album][:title], artist_id: params[:album][:artist_id])
        
        @picture = @album.pictures.create(name: params[:album][:title])
        
        @resized_image = @picture.main_page_size(params)
        
        @picture.photo.attach(io: File.open(@resized_image.path), filename: params[:album][:photo].original_filename)
        
        if @album.save
            render 'api/albums/show'
        else
            render json: @album.errors.full_messages
        end
    end

    def destroy
        @album = Album.find_by(id: params[:id].to_i)
        
        if @album.destroy
            render 'api/albums/album'
        else
            render json: @album.errors.full_messages
        end
    end

end