export const placePic = (user,user_id) => (
    $.ajax({
        url: `/api/pictures/${user_id}`,
        method: 'PATCH',
        data: user,
        contentType: false,
        processData: false,
    })
)

export const getPic = (user_id) => (
    $.ajax({
        url: `/api/users/${user_id}`,
    })
)