<!-- Put the name of the project after the # -->
<!-- the # means h1  -->
# Nasib in Giphy Land!

<!-- Put a description of what the project is -->

This fun project is the official introduction to the complex world of working with APIs. Calling Ghipy API, the user would be able to search through lots of different fun animations. The theme of this project is human reactions or emotions. Although, Ghipy has a massive library of almost any other subject. 
The page starts with a predefined list of emotions and user can search for other types of emotional funny clips and add them to the list, only if it's not done before.

# Link to deployed site
<!-- make a link to the deployed site --> 
<!-- [What the user will see](the link to the deployed site) -->

[NASIB in Giphy Land](https://nasibnia.github.io/GifTastic/)


# Images
<!-- take a picture of the image and add it into the readme  -->
<!-- ![image title](path or link to image) -->
![wire frame](assets/images/gifs/image8.gif)



# technology used
<!-- make a list of technology used -->
<!-- what you used for this web app, like html css -->

<!-- 
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item. 
-->
- HTML
- css
- Bootstrap
- jquery
- javascript
- API call and Queries
- Event Listeners



# code snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

The first part of following code block is responsible for animation start and pause on the event of mouse clicks.

The second part of the code snippest shows the ajax calls to the GIPHY API

```
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


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + srchInput +"&api_key=bcTN4v12kgrx5zKDIHlp2YxG77wxGLiB&limit="
    + limit+"&offset=" + offset + "&tag=emotions";
    offset += limit;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        ...
    });


```


# Learning points
<!-- Learning points where you would write what you thought was helpful -->
- html
- css
- Bootstrap
- event listening functions
- on-click events
- jquery
- javascript
- DOM manipulation
- API
- ajax calls to APIs




# Author 
<!-- make a link to the deployed site and have your name as the link -->
Nasibeh Nourbakhshnia
(www.linkedin.com/in/nasibehnourbakhshnia)

# License