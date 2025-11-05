// a variable for storing names

//
$("#add-creature").click(
function(){

let crName=$("#crName").val();

if((crName== "") ||(crName.length>12)) {//do nothing
    }
else {
$("#creature-list").append(crName + ", ");
}


$("#crName").val("");


//actions when button clicked

});



