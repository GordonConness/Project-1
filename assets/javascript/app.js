let date;
let time; 
let event;
let url;
let cityLocation;
let cityArray = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]

$(document).ready(function(){

    function generateList () {
        for (var i = 0; i < cityArray.length; i++) {
            let list = $("<li>");
            list.addClass("ui-widget-content");
            list.attr("data-name", cityArray[i]);
            list.text(cityArray[i]);
            $("#selectable").append(list);
        };
        
        $(".ui-widget-content").on("click", function(){
            cityLocation = $(this).attr("data-name");
            ajaxCall()

            $(this).siblings().css({transform: "translatex(0)", transition: "transform 200ms" });
            
            anime({
                targets: this,
                translateX: 550,
                scale: 2,
            });
            
        });
    };


    generateList();


    $(function() {
        $('#selectable').selectable();
    });

function ajaxCall () {
    
    let queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=ZU6tUNza7rOj3h1LboOtt2McTHU7RH91"


$.ajax({
    type:"GET",
    url: queryURL,
     }).then(function(response) {

     let r = response;

     date = r._embedded.events[0].dates.start.localDate;
     console.log(date);

     time = r._embedded.events[0].dates.start.localTime;
     console.log(time);

     event = r._embedded.events[0].name;
     console.log(city);
     
     url = r._embedded.events[0].url;
     console.log(url);

     date1 = r._embedded.events[1].dates.start.localDate;
     console.log(date);

     time1 = r._embedded.events[1].dates.start.localTime;
     console.log(time);

     event1 = r._embedded.events[1].name;
     console.log(city);
     
     url1 = r._embedded.events[1].url;
     console.log(url);

     date2 = r._embedded.events[2].dates.start.localDate;
     console.log(date);

     time2 = r._embedded.events[2].dates.start.localTime;
     console.log(time);

     event2 = r._embedded.events[2].name;
     console.log(city);
     
     url2 = r._embedded.events[2].url;
     console.log(url);
     
     date3 = r._embedded.events[3].dates.start.localDate;
     console.log(date);

     time3 = r._embedded.events[3].dates.start.localTime;
     console.log(time);

     event3 = r._embedded.events[3].name;
     console.log(city);
     
     url3 = r._embedded.events[3].url;
     console.log(url);
     
     date4 = r._embedded.events[4].dates.start.localDate;
     console.log(date);

     time4 = r._embedded.events[4].dates.start.localTime;
     console.log(time);

     event4 = r._embedded.events[4].name;
     console.log(city);
     
     url4 = r._embedded.events[4].url;
     console.log(url);
     
     date5 = r._embedded.events[5].dates.start.localDate;
     console.log(date);

     time5 = r._embedded.events[5].dates.start.localTime;
     console.log(time);

     event5 = r._embedded.events[5].name;
     console.log(city);
     
     url5 = r._embedded.events[5].url;
     console.log(url);

     $("#title1").text("Event: " + event);

     $("#title2").text("Event: " + event1);

     $("#title3").text("Event: " + event2);

     $("#title4").text("Event: " + event3);

     $("#title5").text("Event: " + event4)

     $("#title6").text("Event: " + event5)

     $("#date1").text("Date: " + date)
     
     $("#date2").text("Date: " + date1) 

     $("#date3").text("Date: " + date2)

     $("#date4").text("Date: " + date3)

     $("#date5").text("Date: " + date4)

     $("#date6").text("Date: " + date5)

     $("#time1").text("Time: " + time)

     $("#time2").text("Time: " + time1)

     $("#time3").text("Time: " + time2)

     $("#time4").text("Time: " + time3)

     $("#time5").text("Time: " + time4)

     $("#time6").text("Time: " + time5)

     $("link1").text("Link: " + link)

     $("link2").text("Link: " + link1)

     $("link3").text("Link: " + link2)

     $("link4").text("Link: " + link3)

     $("link5").text("Link: " + link4)

     $("link6").text("Link: " + link5)




    });

};

    if ("Chicago") {
        "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=" + cityLocation + "US&apikey=ZU6tUNza7rOj3h1LboOtt2McTHU7RH91"
    };

    if ("New York") {
        "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=" + cityLocation + "US&apikey=ZU6tUNza7rOj3h1LboOtt2McTHU7RH91"
    };
    if ("Los Angeles") {
        "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=" + cityLocation + "US&apikey=ZU6tUNza7rOj3h1LboOtt2McTHU7RH91"
    };

    if ("Phoenix") {
        "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=" + cityLocation + "US&apikey=ZU6tUNza7rOj3h1LboOtt2McTHU7RH91"
    };

    if ("Houston") {
        "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=" + cityLocation + "US&apikey=ZU6tUNza7rOj3h1LboOtt2McTHU7RH91"
    };

});
