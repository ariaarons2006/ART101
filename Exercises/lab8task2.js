$("#creature").click(function() {
  $("#status").text("Owie :(( ! ");
  $("#creature").css("background", "coral");
   $("#creature").css("move", "translateX(50px)");

  $("body").css("background-color", "red");
});

$("#creature").hover(
  function() { $("#status").text("Stay away... 👀"); },
  function() { $("#status").text("grrrr..."); }
);

$("#creature").dblclick(function() {
  $("#status").text("Thank you!");
  $("#creature").css("transform", "scale(1.2)");
    $("#creature").css("background", "lavender");
    $("body").css("background-color", "white");

});

$("#creature").hover(function(){
  $("#creature").css("transform", "scale(0.5)");

});
$("#creature").mouseleave(function(){
  $("#creature").css("transform", "scale(1.2)");


});