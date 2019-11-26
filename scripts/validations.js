$(document).ready(function(){
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
      $("numError").addClass("hidden");
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

    return formValid;
  })
});
