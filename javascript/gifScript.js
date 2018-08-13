
var array  = ["happy", "angry", "excited", "grateful", "scared" , "chilled", "confused" ,"bored" , "thrilled" , "annoyed" ];
var limit  = 10;
var offset = 1;
var previousSrch = "";


for (var i = 0 ; i < array.length ; i++){
    createButton (array[i]);
}

function createButton (str){
    var newButton = $('<button>');
    newButton.addClass("BtnClass");
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
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + srchInput + "&api_key=dc6zaTOxFJmzC&limit=" + limit+"&offset=" + offset + "&tag=emotions";
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
            $("#display-area").prepend(showImage);
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
