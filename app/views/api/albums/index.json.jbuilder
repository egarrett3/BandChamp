json.array! @albums do |album|
    json.extract! album, :title, :id
    json.photo_url url_for(album.pictures[0].photo) unless album.pictures[0].nil?
    json.user album.user
end