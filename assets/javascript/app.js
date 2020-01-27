$("add-city").on("click", function(event) {
    event.preventDefault();

    var cityName = $("city-name").val().trim();

    console.log(cityName);
});

$.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=ZU6tUNza7rOj3h1LboOtt2McTHU7RH91",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
             },
    error: function() {
         }
  });