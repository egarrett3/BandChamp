export const fetchAlbum = (albumId) => {
    $.ajax({
        url:`api/album/${albumId}`,
        method:'GET'
    })
}