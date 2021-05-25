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
        @song.song.attach(io: File.open(params[:song][:sg].tempfile), filename: params[:song][:sg].original_filename)
    
        if @song.save && @song.song_attachment_validation
            render 'api/songs/show'
        else
            render json: @song.errors.full_messages
        end
    end

    def destroy
        @song = Song.find_by(id: params[:id].to_i)
        
        if @song.destroy
            render 'api/songs/song'
        else
            render json: @song.errors.full_messages
        end
    end

    def song_params
        params.require(:song).permit(:id)
    end
end