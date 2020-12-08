json.id @song.id
json.title @song.title
json.song_url url_for(@song.song) unless @song.song.nil?