var apiKey = "750cffd12f331d62c4c6ccdf0f68c030";

var city = "";
var humid = "";
var wind = "";
var uvIndex = "";


var queryURLBase = "http://api.openweathermap.org/data/2.5/weather?q=city&APPID=750cffd12f331d62c4c6ccdf0f68c030";

// var apiKey = "750cffd12f331d62c4c6ccdf0f68c030";


function displayWeather() {
    $.ajax({url: queryURLBase, method: "GET"})
    .done(function(response) {
        console.log(response.main.humidity);
        console.log(response.main.temp);
        console.log(response.wind.speed);
        console.log(dataApp);
        console.log(response.sys.name);
       console.log(queryURLBase);
       var dataApp = $("<h1></h1>").text(response.main.humidity);
       $("#today").html(dataApp);


    })

    return false;
}

$('#search-button').on('click', function() {
    displayWeather("http://api.openweathermap.org/data/2.5/weather?q=city&APPID=750cffd12f331d62c4c6ccdf0f68c030");
})