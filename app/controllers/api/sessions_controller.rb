class Api::SessionsController < ApplicationController

  def create

    username = params[:user][:username] 

    @user1 = User.find_by(username: username) 
    @user2 = User.find_by(email: username)
    
    @user1 ? @user3 = @user1 : @user3 = @user2

    if !@user3
      render json: ['Incorrect username or password. Please try again'], status: 404
    else
      password = params[:user][:password]

      @user = User.find_by_credentials(username,password)
      if @user
        login!(@user)
        @albums = @user.albums
        render "api/users/show"
      else
        render json: ['Incorrect username or password. Please try again'], status: 401
      end
      
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render "api/users/show"
    else
      render json: ["No one is signed in"], status: 404
    end
  end

end