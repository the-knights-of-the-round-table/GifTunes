$(document).ready(function() { 
    var selectedGif;
    var selectedSong;
    var audio = document.getElementById("myAudio");


    function playAudio() { 
      console.log(audio);
    audio.play(); 
  } 
    //  Initialize Firebase

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDbCOEDuTVY2JXW4TNbx7Vu_qNOYnB0Zm0",
    authDomain: "giftunes-4668f.firebaseapp.com",
    databaseURL: "https://giftunes-4668f.firebaseio.com",
    projectId: "giftunes-4668f",
    storageBucket: "giftunes-4668f.appspot.com",
    messagingSenderId: "626090857040"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var buttonPushed = 0;

      $(".mood").on("click",function () {
           buttonPushed = buttonPushed + 1;
           console.log(buttonPushed);
           database.ref().set({
               buttonPushed: buttonPushed
           });
      });


  //pulling gif link
$(document).on('click', ".img-responsive", function(){
    selectedGif = $(this).attr('src');
    updateMessageTextArea();
    audio.play(); 
    playAudio();
})

//pulling track preview (30s) link
$(document).on("click", ".song-choice", function(event) {
    selectedSong = $(this).data("trackURL");
    updateMessageTextArea();
    audio.play(); 
    playAudio();
})

//add gif and song to #message
function updateMessageTextArea (){
  $("#message").val(selectedGif +" "+selectedSong);

  console.log(selectedSong);
  console.log(selectedGif);
}
})
