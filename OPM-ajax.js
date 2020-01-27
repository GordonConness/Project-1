// submit/search button selector for location. (example, need to verify button selector with team)

let location = $("#submit-btn").val();

// combine location input with API url to create "queryURL"
let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial&APPID=9082a48918ffcc2e91530e4ffabb6e1e"


// defining variables outside of ajax call to avoid scope issues
let mainWeather;
let weatherDescription;
let temp;
let humidity;
let city;
let country;
let longitude;
let latitude;


// AJAX call to retrieve API data
$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        let RD = response.data

        //main weather condition
        mainWeather = RD.weather.main;
        console.log(mainWeather);

        //brief description of weather
        weatherDescription = RD.weather.description;
        console.log(weatherDescription);

        //temperature (in Fahrenheit because of units parameter in queryURL "imperial")
        temp = RD.main.temp;
        console.log(temp);

        //humidity
        humidity = RD.main.humidity;
        console.log(humidity);

        //city
        city = RD.name;
        console.log(city);
        
        //country
        country = RD.sys.country;
        console.log(country);

        //longitude coord.
        longitude = RD.coord.lon;
        console.log(longitude);

        //latitude coord
        latitude = RD.coord.lat;
        console.log(latitude);
        
    });


    //example of possible conditional statement

    if( mainWeather == "rainy" && temp <= 50 || mainWeather == "snow" && temp <= 50 ) {
        console.log("Dress warm!")
    } else if ( mainWeather == "sunny" && temp >= 70 ) {
        console.log("Its nice out today!")
    };