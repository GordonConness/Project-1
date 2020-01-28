// *OpenWeatherMap JS file used to manipulate DOM and retrieve API information, as well as make use of JqueryUI selectable method for City List* 

// defining variables outside of ajaxCall and other functions to avoid scope issues
let cityLocation;
let mainWeather;
let weatherDescription;
let temp;
let humidity;
let city;
let country;
let longitude;
let latitude;
// City array list we will use and loop through in our for loop to create list items and assign data-names
let cityArray= ["New York", "Los Angeles", "Chicago", "Huston", "Phoenix"]




$(document).ready(function(){

    // function generates list items from cityArray and assigns them a data-name attr. matching their name, then appends them to the page
    function generateList () {
        for (var i = 0; i < cityArray.length; i++) {
            let list = $("<li>");
            list.addClass("ui-widget-content");
            list.attr("data-name", cityArray[i]);
            list.text(cityArray[i]);
            $("#selectable").append(list);
        };
        
        // On click function for each list item, uses data-name to assign to variable cityLocation to use inside queryURL when ajaxCall function is called inside this on click
        $(".ui-widget-content").on("click", function(){
            cityLocation = $(this).attr("data-name");
            ajaxCall()

        });
    };

    // Used to utilize jqueryUI selectable function
    $(function() {
        $('#selectable').selectable();
    });

    // Used to call generateList to create list items and assign data-names on page load
    generateList();


    // Function in which our ajax call is defined accessing OpenWeatherMap API data based on cityLocation [wrapped in function to call inside on click function]
    function ajaxCall () {
        

        let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityLocation + "&units=imperial&APPID=9082a48918ffcc2e91530e4ffabb6e1e"

        // AJAX call to retrieve API data
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            let RD = response;

            //main weather condition
            mainWeather = RD.weather[0].main;
            console.log(mainWeather);

            //brief description of weather
            weatherDescription = RD.weather[0].description;
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

            // Used to manipulate DOM with API information
            $("#CityName").text(city);
            $("#temperature").text("Temp: " + temp + " degrees Fahrenheit");
            $("#description").text("Weather Description: " + weatherDescription);
        });


        



    };


    //example of possible conditional statement we could make use of

    if( mainWeather == "rainy" && temp <= 50 || mainWeather == "snow" && temp <= 50 ) {
        console.log("Dress warm!")
    } else if ( mainWeather == "sunny" && temp >= 70 ) {
        console.log("Its nice out today!")
    };

})