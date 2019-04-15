//Create an array of strings, this will be our var=moods.

var moods = ["happy", "angry", "funny", "nervous", "romantic", "sad", "relax", "crazy", "confused", "tired" ];
console.log(moods);

//Take the moods in this array and create buttons in the HTML.

function makeButtons () {
    $("#addButton").empty(); //Use a  loop that appends a button for *each string* (by index) in the array.
    for (var i = 0; i < moods.length; i++){ 

    var button = $("<button>");
    button.addClass("mood");
    button.attr("data-name", moods[i]);
    button.text(moods[i]);
    $("#addButton").append(button);
    }
    getGifs();
}

//Make dem buttons!

makeButtons();

function getGifs() {
    //When the user clicks  a button, the page should grab 5  animated gifs from the GIPHY API and place them on the page.

    $('button').on('click', function() { 
        var p = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=Zr9700pOmpA44mJSPmhkDZFXmLkzWOk9&limit=5";

        $.ajax({ url: queryURL, method: 'GET'})
        .done(function(response) {
            var results = response.data;
            console.log(response);

            //Create a loop to bring a rating and text into the div that holds the GIF
            for (var i=0; i < results.length; i++) {

                var gifDiv = $('<div class="item">'); //don't understand why this works but doesn't with ""
                
                var giphyImg = $("<img>");
                giphyImg.attr("src", results[i].images.fixed_height_still.url);
                giphyImg.attr("data-animate", results[i].images.fixed_height.url);

                gifDiv.append(giphyImg)
                gifDiv.append(p)

                $("#gif-area").prepend(gifDiv);
            }

            $(".item").children("img").on("click", function() {
                var state = $(this).attr("data-state")
                }
            });
            });
    });
}