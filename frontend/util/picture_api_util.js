export const placePic = (imageable,id) => (
    $.ajax({
        url: `/api/pictures/${id}`,
        method: 'PATCH',
        data: imageable,
        contentType: false,
        processData: false,
    })
)

export const getPic = (id) => (
    $.ajax({
        url: `/api/pictures/${id}`,
        method: 'GET',
        data: imageable,
        contentType: false,
        processData: false,
    })
)