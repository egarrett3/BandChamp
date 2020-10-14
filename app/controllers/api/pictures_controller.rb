class Api::PicturesController < ApplicationController

    def index
        @imageable = find_imageable
        @pictures = @imageable.pictures
        render :index
    end

    def show
        
    end

    def create 
        @imageable = find_imageable
        @picture = @imageable.comments.build(params[:pictures])
            if @picture.save
                flash[:notice] = "Successfully created comment."
                redirect_to :id => nil
            else
                render :action => 'new'
            end
    end

    private

    def find_imageable
        params.each do |name, value|
            if name =~ /(.+)_id$/
                return $1.classify.constantize.find(value)
            end
        end
    end

end