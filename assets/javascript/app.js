//timer

$("#daquiz").hide();
$("#finish").hide();


//BROKEN CODE
// $("#start").on("click",
// function() {$("#daquiz").show()
// console.log("button works!")
// );

$( "#start" ).click(function() {
    $( "#daquiz" ).show( "slow" );
  });
    

$( "#done" ).click(function() {
    $( "#finish" ).show( "slow" );
    $("#daquiz").hide( "slow" );
  });

setTimeout(function(){
    totalscore = 0;
        //if Die Hard question is answered correctly
        if ($("#diehard").prop("checked")){
  
            totalscore++;
            console.log("button works!" + totalscore);
            $("#score").text(totalscore + "/6");
        }
    
        //Judas Priest question
        if ($("#judaspriest").prop("checked")){
      
            totalscore++;
            console.log("button works!" + totalscore);
            $("#score").text(totalscore + "/6");
        }
    
        //Earthworm Jim
        if ($("#ewj").prop("checked")){
      
            totalscore++;
            console.log("button works!" + totalscore);
            $("#score").text(totalscore + "/6");
        }
    
        //Star Trek
        if ($("#startrek").prop("checked")){
      
            totalscore++;
            console.log("button works!" + totalscore);
            $("#score").text(totalscore + "/6");
        }
    
        //Car Spoiler
        if ($("#fnf").prop("checked")){
      
            totalscore++;
            console.log("button works!" + totalscore);
            $("#score").text(totalscore + "/6");
        }
    
        //Mounted Horsemen
        if ($("#ww2").prop("checked")){
      
            totalscore++;
            console.log("button works!" + totalscore);
            $("#score").text(totalscore + "/6");
        }
    alert("Time's Up!  Your score is: "+totalscore);
  }, 90000);



//button click functions
$("#done").on("click",
// console.log("button works!")
function donebutton(){
    totalscore = 0;
    $("#score").text(totalscore);
    console.log("button works!" + totalscore);
    

    //if Die Hard question is answered correctly
    if ($("#diehard").prop("checked")){
  
        totalscore++;
        console.log("button works!" + totalscore);
        $("#score").text(totalscore + "/6");
    }

    //Judas Priest question
    if ($("#judaspriest").prop("checked")){
  
        totalscore++;
        console.log("button works!" + totalscore);
        $("#score").text(totalscore + "/6");
    }

    //Earthworm Jim
    if ($("#ewj").prop("checked")){
  
        totalscore++;
        console.log("button works!" + totalscore);
        $("#score").text(totalscore + "/6");
    }

    //Star Trek
    if ($("#startrek").prop("checked")){
  
        totalscore++;
        console.log("button works!" + totalscore);
        $("#score").text(totalscore + "/6");
    }

    //Car Spoiler
    if ($("#fnf").prop("checked")){
  
        totalscore++;
        console.log("button works!" + totalscore);
        $("#score").text(totalscore + "/6");
    }

    //Mounted Horsemen
    if ($("#ww2").prop("checked")){
  
        totalscore++;
        console.log("button works!" + totalscore);
        $("#score").text(totalscore + "/6");
    }

    //perfect score
    if(totalscore == 6){
        alert("You Win!")
    }


});