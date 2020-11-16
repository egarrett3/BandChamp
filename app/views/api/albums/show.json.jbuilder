json.id @album.id
json.album_title @album.title
json.photo_url url_for(@album.pictures[0].photo)