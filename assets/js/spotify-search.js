
var playlistId = "37i9dQZF1DXdPec7aLTmlC";

$(document).on("click", "button", function () {
    console.log("You clicked me");
    var accessToken = "BQBB8NB3LxRWWuPu7Zz-Li4D84B0h8Ucxv5UjnAJdL4cycD0ITjl738rDxr6bqWslL8XWXOukq17jjdS_RCeeDxdTBjZbHQnF-DfGtEpm-J1coi4SDVtJJGBPKFAy0k7ZeL8ppzl4wojtGxI";
    var queryURL = "https://api.spotify.com/v1/playlists/37i9dQZF1DXdPec7aLTmlC"; 

    $.ajax({
        method: "GET",
        url: `https://api.spotify.com/v1/playlists/${playlistId}`,
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
        success: function(response) {
            console.log(response);

            var spotifyPlaylistID = response.id;
            console.log("The spotify playlist ID is: " + spotifyPlaylistID);
            var urlLink = response.external_urls.spotify;
            console.log("URL link: " + urlLink);

            $("#music-area").append("<iframe src='https://open.spotify.com/embed/playlist/" + spotifyPlaylistID + "'" +  "width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>");
        }
    
})});