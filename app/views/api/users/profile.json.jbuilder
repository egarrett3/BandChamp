json.id @user.id
json.email @user.email
json.username @user.username
json.photo_url url_for(@user.pictures[0].photo) unless @user.pictures[0].nil?
json.location @user.location unless @user.location.nil?
json.website @user.website unless @user.website.nil?
json.description @user.description unless @user.description.nil?
json.albums @albums unless @albums.nil?
