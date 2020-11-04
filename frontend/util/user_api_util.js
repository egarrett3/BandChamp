export const editUser = (user, user_id) =>
  $.ajax({
    url: `/api/users/${user_id}`,
    method: "PATCH",
    data: user,
    contentType: false,
    processData: false,
});
