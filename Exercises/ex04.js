
let totalNumber=0;
let colors=["Orchid", "Coral", "Peachpuff", "Plum", "HotPink", "SeaGreen",];
let mood;
//add a button titled "click me"

$("#needy-button").click(function(){
 if (totalNumber < 5) { mood = "fresh and happy"; }
   else if ((totalNumber >= 5) && (totalNumber < 10)) { mood = "keep pushing"; }
   else { mood = "so tired!"; }

    let reminder=totalNumber % colors.length;

    $("#needy-button").html ("You Died "+ totalNumber +" Times... Better Luck Next Time! " +colors[reminder]+ " - " + mood);

$("body").css ("background-color", colors[reminder]);

if (colors[reminder]="Orchid")
$("body").append("<img src='wilson.png'>");

    totalNumber=totalNumber+1;

if (totalNumber == 6) {count=0; } 
});


//when it is clicked 
//add one to the total number

// show the total number
//on our button
// show "clicked" total number "times"


//a top limit on numbers
