var count=0
var count2=0
let colorCount=0
let colorCount2=0
var colors=["Rose", "Lightblue",];
let inhabitors=["Sonic the hedgehog", "Dr. House", "Dr. Wilson"];
let meow = {
    name: "Green Hill Zone",
    features: ["loop de loop", "spikes", "rings"], 
};

let bigSentence;
bigSentence = "<p>The two humans who exist in the Green Hill Zone are: " + inhabitors[1] + ", " + inhabitors[2] + "</p>";
$("#output").html(bigSentence);
 

let otherSentence;
otherSentence ="<p>The location " + meow.name + " has features such as: " +meow.features[0] +", " + meow.features[1]+ ", " +"and " + meow.features[2]+"</p>";
$("#product").html(otherSentence);

function makeImage (imageName) {
   if (colors[colorCount]="Rose"){
$("body").append("<img width=100 src='yuri.jpeg'>");
   }
 if (colors[colorCount]="Lightblue") {
$("body").append("<img width=100 src='hilson.webp'>");
 }
}


function makeImage2 (imageName) {
    if (colors[colorCount2]="Rose"){
        $("body").append("<img width=100 src='yuri.jpeg'>");
}
    if (colors[colorCount2]="Lightblue") {
$("body").append("<img width=100 src='hilson.webp'>");
    }
}

$("#gal").click(function(){
    $("#gal").html ("Yuri Time!!" + count + " " + colors[colorCount] );
makeImage("hilson");
    count=count+1;  
  colorCount=colorCount+1 
  if (colorCount == 2) { colorCount = 0; }
    let reminder=totalNumber % colors.length;
});
   
$("#guy").click(function(){
    $("#guy").html ("Yaoi Time!!" + count2 + " " + colors[colorCount2] );
 makeImage2("hilson");
    count2=count2+1; 
    colorCount2=colorCount2+1
  if (colorCount2 == 2) { colorCount2 = 0; }
    let reminder=totalNumber % colors.length;
});

 
