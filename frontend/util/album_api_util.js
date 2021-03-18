export const fetchAlbum = (albumId) => (
    $.ajax({
        url:`/api/albums/${albumId}`,
        method:'GET'
    })
)

export const fetchAlbums = () => (
    $.ajax({
        url: '/api/albums/',
    })
)

export const createAlbum = (album) => (
    $.ajax({
        url: `/api/albums`,
        method: 'POST',
        data: album,
        contentType: false,
        processData: false,
    })
)

export const deleteAlbum = (album_id) => (
    $.ajax({
        url: `/api/albums/${album_id}`,
        method: 'DELETE'
    })
) 
