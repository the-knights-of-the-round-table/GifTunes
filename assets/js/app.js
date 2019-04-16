$(document).ready(function() { 

$("#gif-area").hide();
$("#music-area").hide();
// $("#share-area").hide();
// $(".share-button").hide();

var moods = ["happy", "angry", "funny", "nervous", "romantic", "sad", "relax", "crazy", "confused", "tired"];
console.log(moods);

function makeButtons() {
    $("#buttons-area").empty();  
    for (var i = 0; i < moods.length; i++) {

        var button = $("<button>");
        button.addClass("mood");
        button.attr("data-name", moods[i]);
        button.text(moods[i]);
        $("#buttons-area").append(button);
    }
}

makeButtons();

// ON CLICK MOOD BUTTONS FUNCTION
    $('.mood').on('click', function() { 
        $("#gif-row").empty();
        $("#music-area").empty();

// GIF API:
        var p = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=Zr9700pOmpA44mJSPmhkDZFXmLkzWOk9&limit=6";
    
// GIF AJAX CALL:
    $.ajax({ url: queryURL, method: 'GET' })
        .done(function (response) {
            var results = response.data;
            console.log(response);

// GIF DISPLAYS AFTER ON CLICK:
            $("#gif-area").show();
            $("#music-area").show();
            $(".share-button").show();

            for (var i = 0; i < results.length; i++) {

                var gifDiv = $('<div class="item">'); 
                gifDiv.addClass("card btn-space mx-auto");
                gifDiv.attr("style", "margin:6px");
                var gifDivBody = $("<div>");
                gifDivBody.addClass("card-body");
                var giphyImg = $("<img>");
                giphyImg.attr("class", "img-responsive");
                giphyImg.css({ "width": "200px" });
                giphyImg.css({ "height": "100px;" });
                giphyImg.attr("id", "gif-style");
                giphyImg.attr("mood", p);

                giphyImg.attr("src", results[i].images.fixed_height.url);
                giphyImg.attr("data-animate", results[i].images.fixed_height.url);

// ADDING  A HEART FONT AWESOME FOR FAVORITES:
                var heartSpan = $("<i>");
                heartSpan.addClass("far fa-heart");
                heartSpan.attr("span-image", giphyImg);

                gifDiv.append(giphyImg)
                gifDiv.append(gifDivBody);
                gifDivBody.append(heartSpan);
                // gifDiv.append(p)

                $("#gif-row").prepend(gifDiv);
            };

// SPOTIFY TOKEN:
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://accounts.spotify.com/api/token",
                "method": "POST",
                "headers": {
                    "Authorization": "Basic MzBiMDRlMGNlN2QwNDQzZmE3MTNkM2RlYTA2YWVmNWU6NzlkZTRmOTJmMTA3NGQyNDljYmIyM2IyNTkzZGZkNjA=",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "cache-control": "no-cache",
                    "Postman-Token": "4bd896ac-db3a-4df4-850e-6a4d71d98001"
                },
                "data": {
                    "grant_type": "client_credentials"
                }
            }
            
            $.ajax(settings).done(function (response) {
                console.log("Ajax Ajax Ajax");
                console.log(response);
                console.log(response.access_token);

// SPOTIFY API:
                var tempMood = p;
                var trackSearchUrl = "https://api.spotify.com/v1/search/?type=track&limit=6&q=" + tempMood + "&access_token=" + response.access_token;

// SPOTIFY AJAX CALL:
                $.ajax({
                    method: "GET",
                    url: trackSearchUrl
                })
                    
                .done(function (response) {
                    console.log("we know we're here");    
                    console.log(response);
                    response.tracks.items.forEach((track, index) => {
                    console.log(index + ": " + track.id);

// SPOTIFY WIDGET DISPLAY:
                    $("#music-area").append("<iframe src='https://open.spotify.com/embed/track/" + track.id + "' width='195' height='250' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>");
                    })
            });
        })
})
$(".item").children("img").on("click", function () {
    var state = $(this).attr("data-state")
});

$(document).on("click", "#gif-style", function (event) {
    console.log("--------- THIS ---------")
    console.log($(this));
    console.log("--------- THIS ---------")
});
// $("#submit-mood-button").on("click", function () {
// $("#happy-button").on("click", function () {


$("#submit-mood-button").on("click", function () {
$("#happy-button").on("click", function () {

    var musicInput = $("#mood-input").val().trim();
    console.log($("#mood-input"));

});
});


//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyADHvw-3oLDWIuFwEFmjFEg-pzmZvVNCx8",
//     authDomain: "giftunes-project1.firebaseapp.com",
//     databaseURL: "https://giftunes-project1.firebaseio.com",
//     projectId: "giftunes-project1",
//     storageBucket: "giftunes-project1.appspot.com",
//     messagingSenderId: "949281859431"
//   };
//   firebase.initializeApp(config);

//   var dataRef = firebase.database();

  
// FAVORITE GIF SIDE BAR - not working at the moment:
//   function openNav() {
//     document.getElementById("mySidebar").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   }
  
//   function closeNav() {
//     document.getElementById("mySidebar").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
//   };


// SHARE YOUR GIF/TUNE AREA - EMAIL/TEXT - this code used to work not anymore for now!
// function myFunction() {
//     $("#share-button").on("click", function () {
//         console.log("is working");
//     $("#share-area").css({"visibility": "visible"});
//     var share = document.getElementById("share-area");
//     if (share.style.display === "none") {
//         share.style.display = "block";
//     } else {
//         share.style.display = "none";
//     }
// });
//   };

// myFunction();

// SEND TEXT API AND SHENANIGANS:

// var trackSearchUrl = "https://api.spotify.com/v1/search/?type=tracklimit=6&q=" + tempMood + "&access_token=" + response.access_token;

// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+13213209189',
//      to: '+15558675310'
//    })
//   .then(message => console.log(message.sid));
// });




})})

$('#send-text-button').on('click', function(event) { 
    event.preventDefault();
    var accountSid = 'ACc5c2b1a6bc513aa2ea9ecda481d9d442';
    var authToken = 'c61a1a2d3727e733974bd3bf1d2a64f3';
    // var client = require('twilio')(accountSid, authToken);
    var senderName = $("#sender-name").val().trim();
    var userInputPhone = $("#recipient-phone").val().trim();
    var senderPhoneNumber= '+13213209189';
    var body= $("#message").val().trim();

    var sendText = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.twilio.com/2010-04-01/Accounts/ACc5c2b1a6bc513aa2ea9ecda481d9d442/Messages.json?authToken=c61a1a2d3727e733974bd3bf1d2a64f3",
        "method": "POST",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Basic QUNjNWMyYjFhNmJjNTEzYWEyZWE5ZWNkYTQ4MWQ5ZDQ0MjpjNjFhMWEyZDM3MjdlNzMzOTc0YmQzYmYxZDJhNjRmMw==",
          "cache-control": "no-cache",
          "Postman-Token": "193420b8-f8a3-4255-8a7b-0c976411ec27"
        },
        "data": {
          "Body": body,
          "From": senderPhoneNumber,
          "To": userInputPhone
        }
      }
      
      $.ajax(sendText).done(function (response) {
          console.log("string");
        console.log(response);
      });
    })