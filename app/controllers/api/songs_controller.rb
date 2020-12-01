class Api::SongsController < ApplicationController

    def show 
        @album = Album.find(params[:album_id])
        @songs = @album.songs
        @song = @songs[(params[:id].to_i)]
        render :show
    end
    
    def index
        @album = Album.find(params[:album_id])
        @songs = @album.songs
        render :index
    end

    def create 
        @song = Song.create(title: params[:song][:title], album_id: params[:song][:album_id])
        if @song.save
            @song.song.attach(io: File.open(params[:song][:sg].tempfile), filename: params[:song][:sg].original_filename)
            render 'api/songs/show'
        else
            render json: @song.errors.full_messages
        end
    end

    def destroy
        @song = Song.find_by(id: params[:id].to_i)
        @song.song.purge
        
        if @song.delete
            render 'api/songs/index'
        else
            render json: @song.errors.full_messages
        end
    end

    def song_params
        params.require(:song).permit(:id)
    end
end