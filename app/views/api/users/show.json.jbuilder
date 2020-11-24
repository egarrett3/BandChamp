json.id @user.id
json.email @user.email
json.username @user.username 
json.website @user.website
json.location @user.location
json.description @user.description
json.user_albums @albums unless @albums.nil?

