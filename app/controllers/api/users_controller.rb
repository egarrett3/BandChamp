class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @albums = @user.albums
    debugger
    if @user.pictures[0].photo.attached?
      debugger
      render :profile
    else
      debugger
      render :show
    end
  end

  def create
    @user = User.new(user_params)
    
    if @user.save
      login!(@user)
      # render "api/users/show" json.partial! "api/users/user", user: @user
      @user.pictures.create(name: params[:user][:username])
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
    
  end

  def update
    @user = User.find(params[:id])
    if @user.update!(website:params[:user][:website],location:params[:user][:location],
                    description:params[:user][:description],username:params[:user][:username])
      @user.save!
    end
    render "api/users/profile"
  end
  
  
  private

  def user_params
    params.require(:user).permit(:email, :username, :password, :id, :website, :location, :description)
  end
end