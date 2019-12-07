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
