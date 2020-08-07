export const fetchSong = (id) => (
    $.ajax({
        url: `api/songs/${id}`,
    })
)

export const fetchSongs = () => (
    $.ajax({
        url: 'api/songs/',
    })
)

