export const editUser = (user,id) => (
    $.ajax({
        url:`api/users/${id}`,
        method:'PATCH',
        data: { user },
        contentType: false,
        processData: false,
    })
)