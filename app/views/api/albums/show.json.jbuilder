json.id @album.id
json.title @album.title
json.photo_url url_for(@album.pictures[0].photo)
json.user @album.user
json.albums @album.albums