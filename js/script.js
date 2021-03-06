document.addEventListener("DOMContentLoaded", function(){
    var catalog = document.getElementById("game-list");

    var GameList = '[{"name": "Kill Zone 3", "price": "$26.00", "image": "img/game-cover-1.jpg", "description": " Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit", "link": "juego.html"},'+
                   '{"name": "Need For Speed Rivals", "price": "$21.90",  "image": "img/game-cover-2.jpg", "description": "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit", "link": "juego.html"},'+
                   '{"name": "Call Of Duty: ghosts", "price" : "$26.90",  "image": "img/game-cover-3.jpg", "description": "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit", "link": "juego.html"}]';

    GameList = JSON.parse(GameList);

    for(var i =0; i < GameList.length; i++)
    {
        catalog.innerHTML = catalog.innerHTML + "<li><a href=game-details.html><h2 class='game-title'>" + GameList[i].name + "</a></h2>" + "<h3 class='game-subtitle'>" + GameList[i].price + "</h3>" + "<img class='game-image' src='" + GameList[i].image + "'>" + "<p>" + GameList[i].description + "</p>" + "<a class='button' href='cart.html'" + GameList[i].link + "'>Add to cart</a></li>";
    }

    var products = document.getElementById("new-products");

    var NewProducts = '[{"name": "Alpha Protocol", "price": "$19.00", "image": "img/game-1.jpg", "description": "Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor..."},'+
                      '{"name": "Grand Theft Auto V", "price": "$25.00", "image": "img/game-2.jpg", "description": "Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor..."},'+
                      '{"name": "Need For Speed Rivals", "price": "$21.90", "image": "img/game-3.jpg", "description": "Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor..."},'+
                      '{"name": "Big Game Hunter", "price": "$22.00", "image": "img/game-4.jpg", "description": "Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor..."}]';
    
    NewProducts = JSON.parse(NewProducts);
    
    for(var i=0; i < NewProducts.length; i++)
    {
        products.innerHTML = products.innerHTML + "<li><a href=game-details.html><h3 class='product-title'>" + NewProducts[i].name + "</a></h3>" + "<img class='game-image' src='" + NewProducts[i].image + "'>" + "<h4 class='product-price'>" + NewProducts[i].price + "</h4>" + "<p>" + NewProducts[i].description + "</p>" + "<a class='button' href='cart.html'" + NewProducts[i].link + "'>Add to cart</a></li>";
    }

    var promotionList = document.getElementById("promotion-list");

    var promotion = '[{"name": "Watch Dogs", "price": "$23.00", "image": "img/game-5.jpg", "description": "Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor..."},'+
                    '{"name": "Mortal Kombat", "price": "$27.00", "image": "img/game-6.jpg", "description": "Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor..."},'+
                    '{"name": "Metal Gear Solid", "price": "$28.00", "image": "img/game-7.jpg", "description": "Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor..."},'+
                    '{"name": "Nascar 14", "price": "$26.00", "image": "img/game-8.jpg", "description": "Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor..."}]';
    
    promotion = JSON.parse(promotion);

    for(var i=0; i < promotion.length; i++)
    {
        promotionList.innerHTML = promotionList.innerHTML + "<li><a href=game-details.html><h3 class='promotion-title'>" + promotion[i].name + "</a></h3>" +  "<img class='promotion-image' src='" + promotion[i].image + "'>" + "<h4 class='promotion-price'>" + promotion[i].price + "</h4>" + "<p>" + promotion[i].description + "</p>" + "<a class='button' href='cart.html'" + promotion[i].link + "'>Add to cart</a></li>";
    }

});