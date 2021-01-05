json.id @album.id
json.title @album.title
if @album.pictures[0].photo.nil?
  json.photo_url ""
else
  json.photo_url url_for(@album.pictures[0].photo)
end
json.user @album.user
json.albums @album.albums