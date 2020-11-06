json.collection do |song|
    json.title @song.title
    json.song_url url_for(@song.song)
end