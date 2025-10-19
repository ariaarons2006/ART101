




let inhabitors=["Sonic the hedgehog", "Dr. House", "Dr. Wilson"];
let meow = {
    name: "Green Hill Zone",
    features: ["loop de loop", "spikes", "rings"], 
};

let bigSentence;
bigSentence = "<p>The two humans who exist in the Green Hill Zone are: " + inhabitors[1] + ", " + inhabitors[2] + "</p>";
bigSentence = bigSentence+ "<p>The location " + meow.name + " has features such as: " +meow.features[0] +", " + meow.features[1]+ ", " +"and " + meow.features[2]+"</p>";

$("#output").html(bigSentence);

