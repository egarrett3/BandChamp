class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render :profile
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
    @user = User.find_by(params[:id])

    debugger
  end
  
  
  private

  def user_params
    params.require(:user).permit(:email, :username, :password, :id, :website, :location, :description)
  end
end