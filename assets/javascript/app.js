(function appFunction(){
    const apiKey = "09MtCmX1DgqDQbWgiraLFmgJuvJGdJKK";
    const baseSite = "https://api.giphy.com/v1/gifs/search?api_key="
    var topics = ["cat", "dog", "rabbit", "bird", "turtle"];


    window.onload = function(){

        for (let i = 0; i < topics.length; i++) {
            var topic = $("<button>");
            topic.addClass("topicbtn");
            topic.attr("data-value", topics[i]);
            topic.text(topics[i]);
            $("#topicbox").append(topic);

        }

        $('#form').submit(function(e) {
            e.preventDefault();
            var text = document.getElementById("form").elements[0].value

            var topic = $("<button>");
            topic.addClass("topicbtn");
            topic.attr("data-value", text);
            topic.text(text);
            $("#topicbox").append(topic);

            $(".topicbtn").click(function(){
                console.log($(this).attr("data-value"));
                var queryURL = baseSite + apiKey + "&q=" + $(this).attr("data-value") +"&limit=10&lang=en";
    
                $.ajax({
                    url: queryURL,
                    method: "GET"
                })
                    .then(function(response) {
                    var results = response.data;
            
                    for (var i = 0; i < results.length; i++) {
                        var gifDiv = $("<div>");
            
                        var rating = results[i].rating;
                            
                        var p = $("<p>").text("Rating: " + rating);
            
                        var gifImage = $("<img>");
                        gifImage.attr("src", results[i].images.fixed_height.url);
    
                        gifImage.attr("data-still", results[i].images.fixed_height_still.url);
                        gifImage.attr("data-animate", results[i].images.fixed_height.url);
                        gifImage.attr("data-state", "animate");
                        gifImage.addClass("gif");
    
                        gifDiv.prepend(p);
                        gifDiv.prepend(gifImage);
            
                        $("#gifbox").prepend(gifDiv);
                    }
    
                    $(".gif").click(function(){
                        if ($(this).attr("data-state") === "animate") {
                            $(this).attr("src", $(this).attr("data-still"))
                            $(this).attr("data-state", "still")
                        } else if ($(this).attr("data-state") === "still") {
                            $(this).attr("src", $(this).attr("data-animate"))
                            $(this).attr("data-state", "animate")
                        }
                    });
                });
    
            })
    
       });

        $(".topicbtn").click(function(){
            console.log($(this).attr("data-value"));
            var queryURL = baseSite + apiKey + "&q=" + $(this).attr("data-value") +"&limit=10&lang=en";

            $.ajax({
                url: queryURL,
                method: "GET"
            })
                .then(function(response) {
                var results = response.data;
        
                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");
        
                    var rating = results[i].rating;
                        
                    var p = $("<p>").text("Rating: " + rating);
        
                    var gifImage = $("<img>");
                    gifImage.attr("src", results[i].images.fixed_height.url);

                    gifImage.attr("data-still", results[i].images.fixed_height_still.url);
                    gifImage.attr("data-animate", results[i].images.fixed_height.url);
                    gifImage.attr("data-state", "animate");
                    gifImage.addClass("gif");

                    gifDiv.prepend(p);
                    gifDiv.prepend(gifImage);
        
                    $("#gifbox").prepend(gifDiv);
                }

                $(".gif").click(function(){
                    if ($(this).attr("data-state") === "animate") {
                        $(this).attr("src", $(this).attr("data-still"))
                        $(this).attr("data-state", "still")
                    } else if ($(this).attr("data-state") === "still") {
                        $(this).attr("src", $(this).attr("data-animate"))
                        $(this).attr("data-state", "animate")
                    }
                });
            });

        })
    }
}());
