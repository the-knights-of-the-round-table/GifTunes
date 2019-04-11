//Create an array of strings with starter mood butons.
$(document).ready(function() { 
   
    var moods = ["glad", "mad", "sad"];
    
    function displayGifRating() {

        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=UxNR1uNih1F65bA3EEK3M4XZnDrOhr2A&limit=5";
         
        $.ajax({
          url: queryURL,
          method: "GET"
        })
        .then(function(response) {
            console.log(queryURL);
            console.log(response.data);

            var results = response.data;
            for (var i = 0; i < results.length; i++){
                var gifDiv = $('<div class= divGif>');
                var showGif = $('<img>');
                showGif.addClass("gifClick");
                showGif.attr('src', results[i].images.fixed_height_animate.url);
                showGif.attr('data-animate', results[i].images.fixed_height_animate.url);
                showGif.attr('data-animate', results[i].images.fixed_height.url)
            }
        });
    }

    function makeButtons(){ 
        $("#buttons-view").empty();
        for (i = 0; i < moods.length; i++){
            var a = $("<button>") 
            a.addClass("gif-btn"); 
            a.attr("data-name", moods[i]); 
            a.text(moods[i]); 
            $("#buttons-view").append(a);
        }
    }
    // $(".gifClick").on("click", function(){
        $(document).on("click", ".gifClick", function(){
        console.log(this);
        });

    $("#add-gif").on("click", function() {
        event.preventDefault();
        var gif = $("#gif-input").val().trim();
        moods.push(gif);
        makeButtons();
      });

    $(document).on("click", ".gif-btn", displayGifRating);
    makeButtons();
})