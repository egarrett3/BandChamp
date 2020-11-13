export const fetchSong = (album_id,song_id) => (
    $.ajax({
        url: `api/albums/${album_id}/songs/${song_id}`,
    })
)

export const fetchSongs = (album_id) => (
    $.ajax({
        url: `api/albums/${album_id}/songs`,
    })
)

