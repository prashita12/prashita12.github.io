function demo()
{
    
   var a=window.prompt("enter the post")
   $("#feed").clone().prependTo("#feed_body")
   $("#post").text(a)

}

function edit_profile()
{
    var username=document.getElementById("username").value
    document.getElementById("try").innerHTML =username;
   
    var bio=document.getElementById("bio").value
    document.getElementById("edit_bio").innerHTML =bio;

    var cover_photo=document.getElementById("cover_photo").value
    document.getElementById("edit_cover_photo").innerHTML =cover_photo;

    var user_picture=document.getElementById("user_picture").value
    document.getElementById("edit_user_picture").innerHTML =user_picture;

}