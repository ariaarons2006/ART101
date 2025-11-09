$(".nice-block span").click(function () {

    $(this).parent().toggleClass("weezer");

    if ($(this).html() == "weezer") {
        $(this).html("lol get weezered");
    } else {
        $(this).html("weezer");
    }
    $("body").css("background-color", "blue");
    $("body").append("<img src='weezer.png'>");


});

$("#nice-block").hover(function(){
  $(lab7task2).css("background-color", "yellow");
  }, function(){
  $(lab7task2).css("background-color", "pink");
});