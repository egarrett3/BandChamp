json.array! @songs do |sg|
   json.extract! sg, :id, :title
   json.song_url url_for(sg.song) unless sg.song.nil?
end