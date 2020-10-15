class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    
    if @user.save
      login!(@user)
      # render "api/users/show" json.partial! "api/users/user", user: @user
      @user.pictures.create(name: params[:user][:username])
      render "api/users/profile"
    else
      render json: @user.errors.full_messages, status: 422
    end
    
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password, :id)
  end
end