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

export const makeSong = (song, album_id) => (
    $.ajax({
        url: `/api/albums/${album_id}/songs`,
        method: 'POST',
        data: song,
        contentType: false,
        processData: false,
    })
)

export const deleteSong = (album_id,song_id) => (
    $.ajax({
        url:`/api/albums/${album_id}/songs/${song_id}`,
        method:'DELETE'
    })
) 