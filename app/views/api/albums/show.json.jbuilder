json.array! @album.songs do |song|
    json.title @album.title
    json.photo_url url_for(@album.pictures[0].photo)
    json.song_url url_for(song.song)
    json.title song.title
    json.id song.id
end