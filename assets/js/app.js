$("#gif-area").hide();
$("#music-area").hide();
$("#share-area").hide();
$(".share-button").hide();

// NAV BAR SCROLL EFFECT:
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 10) {
            $("#interactive-navbar").css("background", "black");
        }

        else {
            $(".black").css("background", "transparent");
        }
    })
})

//Create an array of strings, this will be our var=moods.

var moods = ["happy", "angry", "funny", "nervous", "romantic", "sad", "relax", "crazy", "confused", "tired"];
console.log(moods);


//Take the moods in this array and create buttons in the HTML.

function makeButtons() {
    $("#buttons-area").empty(); //Use a  loop that appends a button for *each string* (by index) in the array.
    for (var i = 0; i < moods.length; i++) {

        var button = $("<button>");
        button.addClass("mood");
        button.attr("data-name", moods[i]);
        button.text(moods[i]);
        $("#buttons-area").append(button);
    }
}

//Make dem buttons!

makeButtons();

//When the user clicks  a button, the page should grab 5  animated gifs from the GIPHY API and place them on the page.

    $('.mood').on('click', function() { 
        $("#gif-row").empty();
        $("#music-area").empty();
        var p = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=Zr9700pOmpA44mJSPmhkDZFXmLkzWOk9&limit=6";

    $.ajax({ url: queryURL, method: 'GET' })
        .done(function (response) {
            var results = response.data;
            console.log(response);
            $("#gif-area").show();
            $("#music-area").show();
            $(".share-button").show();

            //Create a loop to bring a rating and text into the div that holds the GIF
            for (var i = 0; i < results.length; i++) {

                var gifDiv = $('<div class="item">'); //don't understand why this works but doesn't with ""
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

                giphyImg.attr("src", results[i].images.fixed_height_still.url);
                giphyImg.attr("data-animate", results[i].images.fixed_height.url);

                gifDiv.append(giphyImg)
                // gifDiv.append(p)

                $("#gif-row").prepend(gifDiv);
            }
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

                var tempMood = p;
                var trackSearchUrl = "https://api.spotify.com/v1/search/?type=track&limit=5&q=" + tempMood + "&access_token=" + response.access_token;
               /* var moodSearchUrl = "https://api.spotify.com/v1/search/?type=playlist&limit=1&q=" + tempMood + "&access_token=" + response.access_token; */


                $.ajax({
                    method: "GET",
                    url: trackSearchUrl
                })
                    
                .done(function (response) {
                    console.log("we know we're here");    
                    console.log(response);
                    response.tracks.items.forEach((track, index) => {
                        console.log(index + ": " + track.id);

                        $("#music-area").append("<iframe src='https://open.spotify.com/embed/track/" + track.id + "' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>");
                        
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

// SHARE YOUR GIF/TUNE AREA - EMAIL/TEXT - this code works!
function myFunction() {
    var send = document.getElementById("share-area");
    if (send.style.display === "none") {
        send.style.display = "block";
    } else {
        send.style.display = "none";
    }
  }


// SEND TEXT API AND SHENANIGANS:

var accountSid = 'ACd119b33c22594f604f68d547a6239b9c';
var authToken = '8a4e229119a830d767cc449b283388d8';
var client = require('twilio')(accountSid, authToken);

var userInputPhone = $("#recipient-phone").val().trim();

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+3213206945',
     to: '+15558675310'
   })
  .then(message => console.log(message.sid));})
