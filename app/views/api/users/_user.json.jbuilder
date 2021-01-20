json.extract! user, :id, :username, :email, :location, :description, :website
json.user_albums user.albums.map { |album| album }
json.photo_url url_for(user.pictures[0].photo)

   


