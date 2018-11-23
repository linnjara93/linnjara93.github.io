document.addEventListener("DOMContentLoaded", function(){
    var gameDetails = document.getElementById("game-details");

    var details = '{"banner": "img/game-banner.png", "cover": "img/game-cover.jpg", "preview1": "img/small-thumb-1.jpg", "preview2": "img/small-thumb-2.jpg", "preview3": "img/small-thumb-3.jpg",'+ 
                  '"description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod.",'+ 
                  '"link": "cart.html", "title": "Game Review", "meter": "80%", "review": "8.0 of 10.0 average (based on 254 reviews)"}';
    
    details = JSON.parse(details);

    gameDetails.innerHTML = gameDetails.innerHTML + "<header><img class='banner' src='" + details.banner + "'>" + "<img class='cover' src='" + details.cover + "'>" + "<img class='preview1' src='" + details.preview1 + "'>" + "<img class='preview2' src='" + details.preview2 + "'>" + "<img class='preview3' src='" + details.preview3 + "'></header>" + "<div><p>" + details.description + "</p>" + "<h3 id='title'>" + details.title + "</h3>" + "<meter id='meter' min='0' max='100' value='80'>" + details.meter + "</meter>" + "<p class='review-description'>" + details.review + "</p>" + "<a class='button' href='cart.html'" + details.link + "'>Add to cart</a><div>";

    document.addEventListener("DOMCOntentLoaded", function(){

        var bar = document.getElementById("meter");
        bar.setAttribute("value", details.meter)
        
    });
});