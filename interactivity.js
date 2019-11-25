$(document).ready(function(){
  // eboard bios

  //desktop nav bar shimmer

  // mobile nav bar

  //form
  $('#preorderForm').on("submit", function() {
    var formValid = true;
    if($("#name").prop("validity").valid ) {
      $("#nameError").addClass("hidden");
    } else {
      $("#nameError").removeClass("hidden");
      formValid = false;
    }
  })
})
