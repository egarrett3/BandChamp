json.id @album.id
json.title @album.title
json.photo_url url_for(@album.pictures[0].photo) unless @album.pictures[0].photo.nil?
json.user @album.user
json.albums @album.albums