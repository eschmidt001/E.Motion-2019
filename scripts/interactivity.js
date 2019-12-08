$(document).ready(function() {
  // eboard bios

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

});
