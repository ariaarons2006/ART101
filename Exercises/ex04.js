
let totalNumber=0;
let colors=["Orchid", "Coral", "Peachpuff", "Plum", "HotPink", "SeaGreen",];
//add a button titled "click me"

$("#needy-button").click(function(){

    let reminder=totalNumber % colors.length;

    
    $("#needy-button").html ("You Died "+ totalNumber +" Times... Better Luck Next Time! " +colors[reminder]);

$("body").css ("background-color", colors[reminder]);

    totalNumber=totalNumber+1;


});


//when it is clicked 
//add one to the total number

// show the total number
//on our button
// show "clicked" total number "times"


//a top limit on numbers
