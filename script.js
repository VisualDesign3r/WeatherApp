
var apiKey = "750cffd12f331d62c4c6ccdf0f68c030";
const cities = JSON.parse(localStorage.getItem('list')) || [];
let date = new Date();
let hour = date.getHours();

$(document).on('click', 'button', function(){
    let city;
    if($(this).attr('id')=== 'search-button'){
        city = $('#search-value').val().trim();
    }else{
        city = $(this).text()
    }
    if(!cities.includes(city)){
        cities.push(city);
        localStorage.setItem('list', JSON.stringify(cities))
        renderList()
    }
    WeatherApp(city)
})

function renderList(){
    $('.history').empty()
    for(let i =0;i<cities.length;i++){
        $('.history').prepend(`<button style='width: 80%;margin:auto'>${cities[i]}</button>`)
    }
}

 function WeatherApp(city) {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
        method: 'GET'
    })
    .then(function (response) {
      console.log(response);
      $('#today').empty()
      $('#today').append(`<h3>${response.name} (${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()})</h3>`)
      $('#today').append(`<h5>Temperature: ${Math.round((response.main.temp - 273.15)*1.8+32)} F`)
      $('#today').append(`<h5>Humidity: ${response.main.humidity}`)
      $('#today').append(`<h5>Wind Speed: ${response.wind.speed}`)

      $.ajax({
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`,
        method: 'GET'
    })
    .then(function(data){
        let forward = Math.floor((24-hour)/3)
        $('#forecast').empty()
        for(let i =forward;i<data.list.length;i+=8){
            console.log(data.list[i])
            $('#forecast').append(`<div class='col-2' style='margin:auto; background-color:blue; color:white'>
            <h6>${data.list[i].dt_txt}</h6>
            <h6>Temperature: ${Math.round((data.list[i].main.temp -273.15)*1.8+32)} F</h6>
            <h6>Humidity: ${data.list[i].main.humidity}</h6>
            </div>`)
        }
    })
    .catch(function(err){
        console.log(err);
        throw err;
    })
    })
    .catch(function(error){
        console.log(error);
        throw error
    })
    }


renderList()










//old code

// var apiKey = "4edcbc636839d6f4c435156055772448";

// var city = "";
// var humid = "";
// var wind = "";
// var uvIndex = "";


// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=&APPID=4edcbc636839d6f4c435156055772448";

// // var apiKey = "750cffd12f331d62c4c6ccdf0f68c030";


// function displayWeather(weatherApp) {
//     $.ajax({url: queryURL, method: "GET"})
//     .then(function(response) {

//         // for (i = 0; i < response.length; i++){

//         console.log(response.main.humidity);
//         console.log(response.main.temp);
//         console.log(response.wind.speed);
//         console.log(response.name);
//         // console.log(dataApp);
//        console.log(queryURL);
//             var today = $('<div>');
//             today.addClass("well");
//             today.attr('id', 'articleWell-' + i);
//             $('#today').append(today);

//             $("#articleWell-" + i).append("<h4>response.main.humidity</h4>");


      
    
//     //    var dataApp = $("<h1></h1>").text(response.main.humidity);
//     //    $("#today").html(dataApp);

       


     

//     return false;
// })
    

// }

// $('#search-button').on('click', function() {
//     displayWeather("https://api.openweathermap.org/data/2.5/weather?q=&APPID=4edcbc636839d6f4c435156055772448");
// })



