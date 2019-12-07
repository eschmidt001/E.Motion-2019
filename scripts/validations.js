$(document).ready(function(){
  // comment field display
  $("#yes").on("input", function(){
    $(".comment").removeClass("hidden");
    $("#comment").attr("required", true);
  })

  $("#no").on("input", function(){
    $(".comment").addClass("hidden");
    $("#comment").attr("required", false);
  })

  //slideshow
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    sshowSlides(slideIndex +=n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex=1}
    if (n<1) {slideIndex = slides.length}
    for (i=0; i<slides.length; i++) {slides[i].style.display = "none"}
    slides[slideIndex-1].style.display = "block"
  }

  var deadline = new Date("Jan 5, 2018 15:37:25").getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (t < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);


  //form validation
  $("#preoderForm").on("submit", function(){
    var formValid = true;

    if($("#name").prop("validity").valid){
      $("#nameError").addClass("hidden");
    }else{
      $("#nameError").removeClass("hidden");
      formValid = false;
    }

    if($("#email").prop("validity").valid){
      $("#emailError").addClass("hidden");
    }else{
      $("#emailError").removeClass("hidden");
      formValid = false;
    }

    if($("#numticket").prop("validity").valid){
      $("#numError").addClass("hidden");
    }else{
      $("#numError").removeClass("hidden");
      formValid = false;
    }

    if($("#north").is(':checked')|| $("#west").is(':checked') || $("#central").is(':checked')){
      $("#locationError").addClass("hidden");
    }else{
      $("#locationError").removeClass("hidden");
      formValid = false;
    }

    if($("#comment").prop("validity").valid){
      $("#commentError").addClass("hidden");
    }else{
      $("#commentError").removeClass("hidden");
      formValid = false;
    }

    var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    $("#navitems").on("click", function () {
      $("#navdropdown").toggleClass('hidden');
    });



    return formValid;
  })
});
