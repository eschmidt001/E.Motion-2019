$(document).ready(function() {

  // slideshow
  var images = [
    "images/friends1.jpg",
    "images/friends2.jpg",
    "images/friends3.jpg",
    "images/friends4.jpg",
    "images/friends5.jpg",
    "images/friends6.jpg",
  ];

  var currentIndex = 0;

  $("#slideshowNext").on("click", function () {
    currentIndex = currentIndex + 1;

    if(currentIndex > 5) {
      currentIndex = currentIndex - 6;
    };
    $("#slideshowImage").attr("src", images[currentIndex]);
  });

  //countdown
  var countdownDate= new Date("Feb 1, 2020").getTime(); //application open date

  var x = setInterval(function(){

    var now= new Date().getTime();
    var distance= countdownDate - now; //total time until open

    //math for numbers
    var days = Math.floor(distance / (1000 * 60 * 60 *24));
    var hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("countdown").innerHTML = days + "days - " + hours + "hours - " + minutes + "minutes - " + seconds + "seconds";
  });
});
