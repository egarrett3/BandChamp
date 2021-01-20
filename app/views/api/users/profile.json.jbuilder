json.id @user.id 
json.username @user.username 
json.email @user.email 
json.location @user.location 
json.description @user.description 
json.website @user.website
json.user_albums @user.albums.map { |album| album }


