$("#add-creature").click(
    function () {

        // grab the value from the input
        let crName = $("#crName").val();
        let crColor= $("#crColor").val();
        let crEyesNumber= $("#crEyesNumber").val();
        let crEyesHtml="";
        let crShape= $("crShape").val();


        for (let i=0; i<crEyesNumber; i++){
crEyesHtml=crEyesHtml+ "<div class=eye>.</div>";
        }

        // check for the field value do not add empty ones
        if ( (crName == "") || (crName.length>12) ) { // do nothing 
        }
        else {
            $("#creature-list").append(`
<div class="creature">
    <div class="creature-body ${crShape}" style="background: ${crColor}"
    > ${crEyesHtml}</div>
    <div class="creature-info">${crName}</div>
</div>`
);
        }
        // remove the name after it's added
        $("#crName").val("");

    });

    
    