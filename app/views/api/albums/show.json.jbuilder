json.title @album.title
json.photo_url url_for(@album.pictures[0].photo)
json.songs @all_songs
