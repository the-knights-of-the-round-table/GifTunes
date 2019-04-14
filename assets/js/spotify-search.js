
var playlistId = "37i9dQZF1DXdPec7aLTmlC";

$(document).on("click", "button", function () {
    console.log("You clicked me");
    var accessToken = "BQAugtcY6N0ZFUpTWHXR43sYUViXGWmgASldTiVgoEeW25S0k-sVvMBXumddhCllWfjOvwubXCwAmc2TnKzqoV_-KomUFMWOdFYI002oXCJ5adMz5Bg8KozbCVuSrA93tECvjWY1eBcLRGnC";
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