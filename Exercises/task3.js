let count=0
let colorCount=0
var colors=["Blue", "Pink", "Black","Red", "Yellow",];
let words=["Sonic", "Amy", "Shadow", "Knuckles","Tails",];


function changeBackground (newColor) {
    $("body").css("background-color", newColor)
}
$(".color-button").click(function () {
changeBackground (this.id);
});

function makeImage (imageName) {

 if (colors[colorCount] == "Blue") {
       $("body").append("<img width=50 src='sonic2.png'>");
   }
if (colors[colorCount] == "Pink") {
       $("body").append("<img width=50 src='amy.webp'>");
   }
if (colors[colorCount] == "Black") {
       $("body").append("<img width=50 src='shadow.webp'>");
   }
if (colors[colorCount] == "Red") {
       $("body").append("<img width=50 src='knuckles.webp'>");
   }
 if (colors[colorCount] == "Yellow") {
       $("body").append("<img width=50 src='tails.webp'>");
   }
}

$("#Sonic").click(function () {

   $("body").css("background-color", colors[0]);

makeImage ("Blue"); 
   count=count+1
colorCount= colorCount+1
   if (colorCount == 5) { colorCount = 0; }

});
$("#Amy").click(function () {

   $("body").css("background-color", colors[1]);
makeImage("Pink");

   count=count+1
colorCount= colorCount+1
   if (colorCount == 5) { colorCount = 0; }

});
$("#Shadow").click(function () {

   $("body").css("background-color", colors[2]);
makeImage("Black");

   count=count+1
colorCount= colorCount+1
   if (colorCount == 5) { colorCount = 0; }

});
$("#Knuckles").click(function () {

   $("body").css("background-color", colors[3]);
makeImage("Red");

   count=count+1
colorCount= colorCount+1
   if (colorCount == 5) { colorCount = 0; }

});
$("#Tails").click(function () {

   $("body").css("background-color", colors[4]);
makeImage("Yellow");

   count=count+1
colorCount= colorCount+1
   if (colorCount == 5) { colorCount = 0; }
});
