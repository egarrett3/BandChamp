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

