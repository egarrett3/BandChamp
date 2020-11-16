class Api::SongsController < ApplicationController

    def show 
        @album = Album.find(params[:album_id])
        @songs = @album.songs
        @song = @songs[params[:id].to_i]
        render :show
    end
    
    def index
        debugger
        @songs = Song.all
        render :index
    end

    def song_params
        params.require(:song).permit(:id)
    end
end