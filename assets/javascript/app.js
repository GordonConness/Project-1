// //animate Current Weather title//
// function randomValues() {
//   anime({
//     targets: 'h2',
//     translateX: function() {
//       return anime.random(-360, 360);
//     },
//     easing: 'easeInOutQuad',
//     duration: 1500,
//     complete: randomValues
//   });
// }

// randomValues();

// Bryan Ajax call
// *OpenWeatherMap JS file used to manipulate DOM and retrieve API information, as well as make use of JqueryUI selectable method for City List*

// defining variables outside of ajaxCall and other functions to avoid scope issues
let cityLocation;
let weatherID;
let mainWeather;
let weatherDescription;
let temp;
let humidity;
let city;
let country;
let longitude;
let latitude;
// City array list we will use and loop through in our for loop to create list items and assign data-names
let cityArray = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

$(document).ready(function() {
  // function generates list items from cityArray and assigns them a data-name attr. matching their name, then appends them to the page
  function generateList() {
    for (var i = 0; i < cityArray.length; i++) {
      let list = $('<li>');
      list.addClass('ui-widget-content');
      list.attr('data-name', cityArray[i]);
      list.text(cityArray[i]);
      $('#selectable').append(list);
    }

    // On click function for each list item, uses data-name to assign to variable cityLocation to use inside queryURL when ajaxCall function is called inside this on click
    $('.ui-widget-content').on('click', function() {
      cityLocation = $(this).attr('data-name');
      ajaxCall();

      // returns siblings to original position so only current city is animated to the right... sometimes buggy if clicking through links too quickly
      $(this)
        .siblings()
        .css({ transform: 'translatex(0)', transition: 'transform 200ms' });

      // messing with Anime.js to offset selected city
      anime({
        targets: this,
        translateX: 550,
        scale: 2
      });
    });
  }

  // Used to utilize jqueryUI selectable function
  $(function() {
    $('#selectable').selectable();
  });

  // Used to call generateList to create list items and assign data-names on page load
  generateList();

  // Function in which our ajax call is defined accessing OpenWeatherMap API data based on cityLocation [wrapped in function to call inside on click function]
  function ajaxCall() {
    let queryURL =
      'http://api.openweathermap.org/data/2.5/weather?q=' +
      cityLocation +
      '&units=imperial&APPID=9082a48918ffcc2e91530e4ffabb6e1e';

    // AJAX call to retrieve API data
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(response) {
      console.log(response);
      let RD = response;

      weatherID = RD.weather[0].id;
      console.log(weatherID);

      //main weather condition
      mainWeather = RD.weather[0].main;
      console.log(mainWeather);

      //brief description of weather
      weatherDescription = RD.weather[0].description;
      console.log(weatherDescription);

      //temperature (in Fahrenheit because of units parameter in queryURL "imperial")
      temp = Math.ceil(RD.main.temp);
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
      $('#CityName').text(city);
      $('#temperature').html('Temp: ' + temp + ' &#x2109'); // has to be .html to get degrees fahrenheit symbol to show
      $('#description').html(
        'Weather Description: ' + '<br>' + weatherDescription
      );

      // Variables to compare API weather ID "weatherID" to for icon img
      let rainyArray = [500, 501, 502, 503, 504];
      let drizzleArray = [
        300,
        301,
        302,
        310,
        311,
        312,
        313,
        314,
        321,
        520,
        521,
        522,
        531
      ];
      let snowyArray = [
        600,
        601,
        602,
        611,
        612,
        613,
        615,
        616,
        620,
        621,
        622,
        511
      ];
      let atmosphereArray = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
      let stormyArray = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];
      let clearSky = 800;
      let fewClouds = 801;
      let scatClouds = 802;
      let heavyCloudArray = [803, 804];

      // for loops to loop through each array, and compare "weatherID" to number from each array, conditional statement in each for loop to change img url to icon matching "weatherID".

      // rainyArray for img "10d"
      for (var a = 0; a < rainyArray.length; a++) {
        if (weatherID == rainyArray[a]) {
          $('#img').attr('src', 'http://openweathermap.org/img/wn/10d@2x.png');
        }
      }
      // drizzleArray for img "09d"
      for (var b = 0; b < drizzleArray.length; b++) {
        if (weatherID == drizzleArray[b]) {
          $('#img').attr('src', 'http://openweathermap.org/img/wn/09d@2x.png');
        }
      }
      // snowyArray for img "13d"
      for (var c = 0; c < snowyArray.length; c++) {
        if (weatherID == snowyArray[c]) {
          $('#img').attr('src', 'http://openweathermap.org/img/wn/13d@2x.png');
        }
      }
      // atmosphereArray for img "50d"
      for (var d = 0; d < atmosphereArray.length; d++) {
        if (weatherID == atmosphereArray[d]) {
          $('#img').attr('src', 'http://openweathermap.org/img/wn/50d@2x.png');
        }
      }
      // stormyArray for img "11d"
      for (var e = 0; e < stormyArray.length; e++) {
        if (weatherID == stormyArray[e]) {
          $('#img').attr('src', 'http://openweathermap.org/img/wn/11d@2x.png');
        }
      }
      // heavyCloudArray for img "04d"
      for (var f = 0; f < heavyCloudArray.length; f++) {
        if (weatherID == heavyCloudArray[f]) {
          $('#img').attr('src', 'http://openweathermap.org/img/wn/04d@2x.png');
        }
      }

      // else if conditional statement for variables that are nto arrays, to change img url to icon matching "weatherID".

      // clearySky for img "01d"
      if (weatherID == clearSky) {
        $('#img').attr('src', 'http://openweathermap.org/img/wn/01d@2x.png');

        // fewClouds for img "02d"
      } else if (weatherID == fewClouds) {
        $('#img').attr('src', 'http://openweathermap.org/img/wn/02d@2x.png');

        // scatClouds for img "03d"
      } else if (weatherID == scatClouds) {
        $('#img').attr('src', 'http://openweathermap.org/img/wn/03d@2x.png');
      }

      //example of possible conditional statement we could make use of

      if (temp <= 50) {
        console.log('Dress warm!');
      } else if (temp >= 70) {
        console.log('Its nice out today!');
      }
    });
  }
});
