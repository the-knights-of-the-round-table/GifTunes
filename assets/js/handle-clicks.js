$(document).ready(function() { 
    var selectedGif;
    var selectedSong;

    //   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyADHvw-3oLDWIuFwEFmjFEg-pzmZvVNCx8",
    authDomain: "giftunes-project1.firebaseapp.com",
    databaseURL: "https://giftunes-project1.firebaseio.com",
    projectId: "giftunes-project1",
    storageBucket: "giftunes-project1.appspot.com",
    messagingSenderId: "949281859431"
  };
  firebase.initializeApp(config);

  var dataRef = firebase.database();

$(document).on('click', ".img-responsive", function(){
    selectedGif = $(this).attr('src');
    console.log(selectedGif);
})
// $(document).on('click', ".spotify-song", function(){
//     console.log("anything");
//     // selectedSong = $(this)//.attr('src');
//     // console.log(selectedSong);
// })
// })

//pulling track id
$(document).on("click", ".spotify-song", function(event) {
    selectedSong = $(this).attr('track.id');
    console.log($(this));
    
    alert($(this).attr("data-id"))
})


// WE DONT KNOW IF WE NEED THIS- THIS CODE BRAKES STUFF:

// $(document).on("click", "#gif-style", function (event) {
//     console.log("--------- THIS ---------")
//     console.log($(this));
    
//     alert($(this).attr("data-id"))
// })})
// // SPOTIFY WIDGET DISPLAY:
//  var newFrame = $("<div>");
//  newFrame.attr("data-id", track.id);
//  newFrame.addClass("track-div");

//  newFrame.append(
//      "<iframe src='https://open.spotify.com/embed/track/" +
//        track.id +
//        "' width='195' height='250' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>"
//    );
//  $("#music-area").append(newFrame);

})
