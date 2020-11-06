class Api::AlbumsController < ApplicationController

    def show
        @album = Album.find_by(params[:id])
        render 'api/album/show'
    end

end