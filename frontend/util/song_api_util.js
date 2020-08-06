export const fetchsong = (id) => (
    $.ajax({
        url: `api/songs/${id}`,
    })
)

export const fetchsongs = () => (
    $.ajax({
        url: 'api/songs/',
    })
)

