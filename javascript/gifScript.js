
var topics  = ["happy", "angry", "excited", "grateful", "scared" , "chilled", "confused" ,"bored" , "thrilled" , "annoyed" ];
var limit  = 10;
var offset = 1;
var previousSrch = "";
var trackerObj = {};

for (var i = 0 ; i < topics.length ; i++){
    createButton (topics[i]);
    trackerObj[topics[i]] = true;

}

function createButton (str){
    var newButton = $('<button>');
    newButton.addClass("BtnClass   light bg-primary border-9 border-success border rounded-circle mr-3 p-3 shadow-lg   hvr-bounce-in");
    newButton.text(str);
    newButton.attr("value", str);
    $("#button-area").append(newButton);
}

$(document).on('click', '.BtnClass', function (){
    
    // $(this).attr('style',"background-color:blue");
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
            var floatDiv = $("<div class='img-container hvr-bounce-to-bottom '>");
            var showImage = $('<img>');
            console.log(response.data[i].images);
            console.log(response.data[i].images.fixed_height_still.url);
            showImage.attr("src",response.data[i].images.fixed_height_still.url);
            showImage.attr("data-still",response.data[i].images.fixed_height_still.url);
            showImage.attr("data-animate",response.data[i].images.fixed_height.url);
            showImage.attr("data-state","still");
            showImage.attr("class","gif ");


            gifBlock.prepend(showImage);
            floatDiv.prepend(gifBlock);
            floatDiv.append('<p id = "note" class="card-title hvr-bounce-to-bottom" style="visibility:visible" > Rating : " ' + response.data[i].rating.toUpperCase()+  ' "</p>');
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

// create new buttons based on the subject user enters in the search bar
$(document).on('click', '#select-subject', function (){
    event.preventDefault();
    var inputsearch = $("#searchItem").val();
    console.log(inputsearch);

    //check whether button already exists:
    if (inputsearch in trackerObj){
        console.log("button already exists");
        $(".duplicate").text("button already exists");
        // bouncing the submit button
        var i = 0;
		while (i<5){
		    $(this).animate({right: '-5%'}, "fast");
            $(this).animate({right: '5%'}, "fast");
            // $(".duplicate").animate({right: '-5%'}, "fast");
            // $(".duplicate").animate({right: '5%'}, "fast");
        	i++;
    	}
        $(this).animate({right: '0%'}, "fast");
    } else {
        $(".duplicate").empty();
        trackerObj[inputsearch] = true;
        createButton(inputsearch);
    }
});
