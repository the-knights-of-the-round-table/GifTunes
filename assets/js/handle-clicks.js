$(document).ready(function() {

    var selectedGif;
    var selectedSong;
    var audio = document.getElementById("myAudio");


    function playAudio() { 
      console.log(audio);
    audio.play(); 
  } 
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
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}