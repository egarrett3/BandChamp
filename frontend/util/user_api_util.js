export const editUser = (formData,id) => (
    $.ajax({
        url:`api/users/${id}`,
        method:'PATCH',
        data: { formData },
        contentType: false,
        processData: false,
    })
)