
var array  = ["happy", "angry", "excited"];
var limit  = 10;
var offset = 1;


for (var i = 0 ; i < array.length ; i++){
    var newButton = $('<button>');
    newButton.addClass("BtnClass");
    newButton.text(array[i]);
    newButton.attr("value", array[i]);
    $("#button-area").append(newButton);
}

$(document).on('click', '.BtnClass', function (){
    var srchInput = $(this).val();
    console.log("search input is " + srchInput);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + srchInput + "&api_key=dc6zaTOxFJmzC&limit=" + limit+"&offset=" + offset;
    offset += limit;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        for (var i = 0 ; i < limit ; i++){
            var showImage = $('<img>');
            console.log(response.data[i].images);
            console.log(response.data[i].images.fixed_height_still.url);
            showImage.attr("src",response.data[i].images.fixed_height_still.url);
            showImage.attr("data-still",response.data[i].images.fixed_height_still.url);
            showImage.attr("data-animate",response.data[i].images.fixed_height.url);
            showImage.attr("data-state","still");
            showImage.attr("class","gif");
            // showImage.attr("data-state", "still");
            $("#display-area").append(showImage);
            // console.log(this)
        }

        
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
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        console.log("src is " + $(this).attr("src"));
        $(this).attr("data-state","still");
    }
});
