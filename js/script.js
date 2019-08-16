$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var booleans1 = $("#booleans1").val();
    var booleans2 = $("#booleans2").val();

    if (booleans1!===booleans2){
      $("c").show();
    }

  }
  event.preventDefault();
});
