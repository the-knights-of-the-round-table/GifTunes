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
$(document).on('click', ".spotify-song", function(){
    console.log("anything");
    // selectedSong = $(this)//.attr('src');
    // console.log(selectedSong);
})


})
