$(document).ready(function() {

// Function to random numbers to score needed and charm points 
function getrandomint(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;}

// The varibles needed
var charmneed = 0;
var wins = 0;
var losses = 0;
var crystals = [];
var charmtotal = 0;
var charm = [];

function startGame(){

    charmneed = getrandomint(13, 50);
    $("#charmneeded").html(charmneed);

    for(var i=0; i<4; i++){
        charm[i] = getrandomint(1, 10)
    }
}

    function winners(){
        wins++;
        $("#wins").html(wins);
        restartGame();
        startGame();
     }

    function loser(){
        losses++;
        $("#loses").html(losses);
        restartGame();
        startGame();
    }


    document.getElementById("first").onclick = function(){
        charmtotal= charmtotal + charm[0];
        console.log(charmtotal);
        console.log(charmneed);
        $("#charmamount").html(charmtotal);
        if (charmtotal === charmneed){
            winners();
        }
        else if(charmtotal > charmneed){
            loser();
        }
    }

    document.getElementById("second").onclick = function(){
        charmtotal= charmtotal + charm[1];
        console.log(charmtotal);
        console.log(charmneed);
        $("#charmamount").html(charmtotal);
        if (charmtotal === charmneed){
            winners();
        }
        else if(charmtotal > charmneed){
            loser();
        }
    }

    document.getElementById("third").onclick = function(){
        charmtotal= charmtotal + charm[2];
        console.log(charmtotal);
        console.log(charmneed);
        $("#charmamount").html(charmtotal);
        if (charmtotal === charmneed){
            winners();
        }
        else if(charmtotal > charmneed){
            loser();
        }
    }

    document.getElementById("fourth").onclick = function(){
        charmtotal= charmtotal + charm[3];
        console.log(charmtotal);
        console.log(charmneed);
        $("#charmamount").html(charmtotal);
        if (charmtotal === charmneed){
            winners();
        }
        else if(charmtotal > charmneed){
            loser();
        }
    }

 function restartGame(){
     charmtotal= 0;
     charmneeded = 0;
     $("#charmamount").html(charmtotal);
 }




startGame();
});
