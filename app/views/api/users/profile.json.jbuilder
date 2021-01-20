json.partial! 'api/users/user', user: @user
json.photo_url url_for(@user.pictures[0].photo) unless @user.pictures[0].nil?

