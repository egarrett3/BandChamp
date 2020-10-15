json.id @user.id
json.email @user.email
json.username @user.username
if @user.pictures[0]
    json.null!
else
    json.photo_url urlfor(@user.pictures[0].photo)
end