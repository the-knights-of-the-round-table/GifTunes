
var playlistId = "37i9dQZF1DXdPec7aLTmlC";

$(document).on("click", "button", function () {
    console.log("You clicked me");
    var accessToken = "BQCCsK3RyrCbuRqxSov9h4z1ILk8xPi_rYtg7QvOuAECSAc5xqaKuJf_fX9WS6iDEO0tLSMw7oKQg_ylyIuH6SllH8alWHvlTi8d6vC0fZoztfggTkWx8TF60ZlWQFe1ERlHc6xwUWmCc9KM";
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