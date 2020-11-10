json.array! @albums do |album|
    json.extract! album, :title, :id
    json.photo_url url_for(album.pictures[0].photo)
end