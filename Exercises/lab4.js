// declaring an array with name myCommutes
let myCommutes = ["walk", "bus", "car", "metro", "divine teleportation by the grace of god"];

let myFavouriteCommute = {
    type: "Bus",
    route: 18,
    print: "UCSC to Downtown Santa Cruz",
    hasMiddleDoor: true,
    drivers: ["someone new every day"],
};

 let megaSentence;
megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[5] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";
$("#output").html(megaSentence);