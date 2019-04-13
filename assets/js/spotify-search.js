// $(document).ready(function() {
// //     var search = document.getElementById('mood-input');

// // if(search) {
// //     document.getElementById('mood-input').addEventListener('submit', function (e) {
// //         e.preventDefault();
// //         searchAlbums(document.getElementById('query').value);
// //     }, false);
// }

var playlistId = "37i9dQZF1DXdPec7aLTmlC";
// playlistId = moods[0];

// var searchAlbums = function(playlistId) {
//     // var playlistId = "37i9dQZF1DXdPec7aLTmlC";
//     var accessToken = "BQAIb9nRF6B8vE6aJkwn5eP31EKnG7RzYrmWjSDnkm6cmOP37Hwoui8g2uSEpa0xo4UHN9C7nYfwfkf3b5p6qFPSTnjIMZxRNGR_xxqPI_Uyo06O8bQdB4uMxy_ZCIT34DxbpiuveadqFjSf8JG3Ig";
    
    
//     $.ajax({
//         method: "GET",
//         url: `https://api.spotify.com/v1/playlists/${playlistId}`,
//         headers: {
//             'Authorization': 'Bearer ' + accessToken
//         },
//         success: function(response) {
//             console.log(response);

            
//         }
//     });
// } 

// $("#submit-mood-button").on("click", function () {


$(document).on("click", "button", function () {
    console.log("You clicked me");
    // var accessToken = "BQAIb9nRF6B8vE6aJkwn5eP31EKnG7RzYrmWjSDnkm6cmOP37Hwoui8g2uSEpa0xo4UHN9C7nYfwfkf3b5p6qFPSTnjIMZxRNGR_xxqPI_Uyo06O8bQdB4uMxy_ZCIT34DxbpiuveadqFjSf8JG3Ig";
    var accessToken = "BQCiyO6rDTRDsp6-xfrxyU08c524OMF4qtBY0Z8lN2F8xJP_UG-PmNdsP90kJ_UpTGWEiVA8qKjm3aV4RHE4afoGzhib4JkDihQmFYGDB8moa4JuQT2UNTD1-ZltETjsaAfjJu9EEaPbLskm";
    var queryURL = "https://api.spotify.com/v1/playlists/37i9dQZF1DXdPec7aLTmlC"; 

    $.ajax({
        method: "GET",
        url: `https://api.spotify.com/v1/playlists/${playlistId}`,
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
        success: function(response) {
            console.log(response);

            for (var i = 0; i <= 5; i++) {

                var playlistTracks = response.tracks.items[i].track.name;
                console.log(playlistTracks);
               // var playlistDiv = $("music-area");
               // playlistDiv.append(response.tracks.items[i].track.name);
            }

           /* var results = response.tracks.items[0].track.name;
            console.log(results); */

            $("#music-area").append(playlistTracks);
        }
    
})});