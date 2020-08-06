export const fetchsong = (id) => (
    $.ajax({
        url: `api/songs/${id}`,
    })
)