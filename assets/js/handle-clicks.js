$(document).ready(function() { 
    var selectedGif;
    var selectedSong;

    //  Initialize Firebase
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

  //pulling gif link
$(document).on('click', ".img-responsive", function(){
    selectedGif = $(this).attr('src');
    updateMessageTextArea();
})

//pulling track preview (30s) link
$(document).on("click", ".song-choice", function(event) {
    selectedSong = $(this).data("trackURL");
    updateMessageTextArea();
})

//add gif and song to #message
function updateMessageTextArea (){
  $("#message").val(selectedGif +" "+selectedSong);

  console.log(selectedSong);
  console.log(selectedGif);
}
})
