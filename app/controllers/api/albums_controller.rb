class Api::AlbumsController < ApplicationController

    def index
        @albums = Album.all
        render 'api/albums/index'
    end

    def show 
        @album = Album.find_by(id: params[:id])
        render 'api/albums/show'
    end

    def create
        @album = Album.create(title: params[:album][:title], artist_id: params[:album][:artist_id])
        debugger
        @picture = @album.pictures.create(name: params[:user][:username])
        debugger
        @picture.photo.attach(io: File.open(params[:album][:photo].tempfile), filename: params[:album][:photo].original_filename)
        
        if @album.save
            render 'api/songs/show'
        else
            render json: @album.errors.full_messages
        end
    end

    def destroy
        @album = Album.find_by(id: params[:id].to_i)
        
        @album.pictures[0].photo.purge
    
        if @album.delete && @album.pictures[0].delete
            render 'api/albums/show'
        else
            render json: @album.errors.full_messages
        end
    end


end