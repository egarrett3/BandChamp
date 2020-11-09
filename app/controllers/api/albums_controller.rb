class Api::AlbumsController < ApplicationController

    def index
        @album = Album.find_by(params[:id])
        @collection = @album.song_id.map do |song_id|
             Song.find_by(params[:id])
        end
        render 'api/albums/index'
    end

    def show 
        @album = Album.find_by(params[:id])
        render 'api/albums/show'
    end


end