$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var answerOne = $("input:radio[name=answer]:checked").val();
    var answerTwo = $("input:radio[name=answer]:checked").val();
    var answerThree = $("input:radio[name=answer]:checked").val();
    var answerFour = $("input:radio[name=answer]:checked").val();
    var answerFive = $("input:radio[name=answer]:checked").val();

    if (answerOne === "YES" && answerThree === "YES" && answerFour ==="YES") {
     $(".output").show();
     $("#C").text("C#");
    }
    if (answerTwo === "YES" && answerFive === "YES" && answerFour ==="YES") {
      $("#sruby").text("RUBY");
      $(".output").show();
    }



  });
});
