json.id @user.id
json.email @user.email
json.username @user.username
json.photo_url url_for(@user.pictures[0].photo) unless @user.pictures[0].nil?