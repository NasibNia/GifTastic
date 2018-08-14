
var array  = ["happy", "angry", "excited", "grateful", "scared" , "chilled", "confused" ,"bored" , "thrilled" , "annoyed" ];
var limit  = 10;
var offset = 1;
var previousSrch = "";
var trackerObj = {};

for (var i = 0 ; i < array.length ; i++){
    createButton (array[i]);
}

function createButton (str){
    var newButton = $('<button>');
    newButton.addClass("BtnClass   light bg-primary border-9 border-success border rounded-circle mr-3 p-3 shadow-lg   hvr-bounce-in");
    newButton.text(str);
    newButton.attr("value", str);
    $("#button-area").append(newButton);
}

$(document).on('click', '.BtnClass', function (){
    var srchInput = $(this).val();
    console.log("search input is " + srchInput);

    if (srchInput !== previousSrch) {
        $("#display-area").empty();
    }
    // "&api_key=dc6zaTOxFJmzC&limit="
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + srchInput +"&api_key=bcTN4v12kgrx5zKDIHlp2YxG77wxGLiB&limit="
    + limit+"&offset=" + offset + "&tag=emotions";
    offset += limit;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        for (var i = 0 ; i < limit ; i++){
            
            var gifBlock = $('<div class="gifBox">');
            var floatDiv = $("<div class='img-container hvr-bounce-to-bottom hvr-bounce-in'>");
            var showImage = $('<img>');
            console.log(response.data[i].images);
            console.log(response.data[i].images.fixed_height_still.url);
            showImage.attr("src",response.data[i].images.fixed_height_still.url);
            showImage.attr("data-still",response.data[i].images.fixed_height_still.url);
            showImage.attr("data-animate",response.data[i].images.fixed_height.url);
            showImage.attr("data-state","still");
            // showImage.attr("class","gif card-deck card-img-top bg-dark col p-0 mt-4 mb-0 text-light border-9  float-right");
            showImage.attr("class","gif ");


            gifBlock.prepend(showImage);
            floatDiv.prepend(gifBlock);
            floatDiv.append('<p id = "note" class="card-title hvr-bounce-to-bottom" style="visibility:visible" > Rating : " ' + response.data[i].rating.toUpperCase()+  ' "</p>');
            // showImage.attr("info", response.data[i].rating.toUpperCase());
            // showImage.attr("data-state", "still");
            $("#display-area").prepend(floatDiv);
            
            // $("#display-area").append('<p id = "note" class="card-title" style="visibility:visible" > Rating : " ' + response.data[i].rating.toUpperCase()+  ' "</p>');
            // console.log(this)
        }
        previousSrch = srchInput;
        
        // showImage.attr("src",);

        // $("#button-area").append()
    });
});


$(document).on('click', '.gif', function (){
    var state = $(this).attr("data-state");
    console.log(state);
    if(state == "still"){
        $(this).attr("src", $(this).attr("data-animate"));
        console.log("src is " + $(this).attr("src"));
        $(this).attr("data-state","animate"); 
        // $(this).txt("Rating : "  + $(this).attr("info"));
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        console.log("src is " + $(this).attr("src"));
        $(this).attr("data-state","still");
    }
});

$(document).on('click', '#select-subject', function (){
    event.preventDefault();
    var inputsearch = $("#searchItem").val();
    console.log(inputsearch);
    createButton(inputsearch);

});
