//Create an array of strings to give the app some starter mood buttons. 

var moods = ["happy", "mad", "confused"];
console.log(moods);

//Take the moods in this array and create buttons in the HTML.

function makeButtons () {
    $("#addButton").empty(); //Use a  loop that appends a button for *each string* (by index) in the array.
    for (var i = 0; i < moods.length; i++){ 

    var button = $("<button>");
    button.addClass("topic");
    button.attr("data-name", moods[i]);
    button.text(moods[i]);
    $("#addButton").append(button);
    }
    getGifs();
};


$("#getGifs").on("click", function () {
//Put the user's mood input into the buttons and console log the input.

    var userInput = $("#gif-input").val().trim();
    console.log($("#gif-input"));
    topics.push(userInput);
    makeButtons();
    return false;

    if (userInput === "") {
        $("#gif-input").val().trim();
    }
});

//Make dem buttons!

makeButtons();

function getGifs() {
    //When the user clicks  a button, the page should grab 5 static, non-animated gifs from the GIPHY API and place them on the page.

    //update API key, if needed
    $('button').on('click', function() { 
        var p = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=Zr9700pOmpA44mJSPmhkDZFXmLkzWOk9&limit=5";

        $.ajax({ url: queryURL, method: 'GET'})
        .done(function(response) {
            var results = response.data;
            console.log(response);

            //Create a loop to bring a rating and text into the div that holds the GIF

            //do we want to grab rating? should we drop it?
            for (var i=0; i < results.length; i++) {

                var gifDiv = $('<div class="item">'); 
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var giphyImg = $("<img>");
                giphyImg.attr("src", results[i].images.fixed_height_still.url);
                giphyImg.attr("data-still", results[i].images.fixed_height_still.url);
                giphyImg.attr("data-animate", results[i].images.fixed_height.url);
                giphyImg.attr("data-state", "still");

                gifDiv.append(giphyImg)
                gifDiv.append(p)

                $("#gifsAppearHere").prepend(gifDiv);
            }

            $(".item").children("img").on("click", function() {
                var state = $(this).attr("data-state");

                //I need a simple if/then to toggle the gifs from animated to still (from last week's activity!)
//We don't need to toggle or make these still, right?
                if (state == "still") {
                    $(this).attr("src", $(this).data("animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).data("still"));
                    $(this).attr("data-state", "still");
                }
            });
            });
    });
}