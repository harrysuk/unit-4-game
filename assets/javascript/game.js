$(document).ready(function() {

// Function to random numbers to score needed and charm points 

function getrandomint(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;}

// The varibles needed
var charmneed;
var wins = 0;
var losses = 0;
var crystals = [];
var charmtotal = 0;
var charm = [];

function startGame(){

    charmneed = getrandomint(13, 50);
    $("#charmneeded").html(charmneed);

    for(var i=0; i<4; i++){
        charm[i] = getrandomint(1, 10);
    }

    function winners(){
        wins++;

    }

    function loser(){
        losses++;

    }

    $("#first").onclick = function(){
        charmtotal= charmtotal + charm[0];
        console.log(charmtotal);
        $("#charmamount").html(charmtotal);
        if (charmtotal == charmneed){
            winners();
        }
        else if(charmtotal > charmneed){
            loser();
        }
    }

    $("#second").onclick = function(){
        charmtotal= charmtotal + charm[1];
        $("#charmamount").html(charmtotal);
        if (charmtotal == charmneed){
            winners();
        }
        else if(charmtotal > charmneed){
            loser();
        }
    }

    $("#third").onclick = function(){
        charmtotal= charmtotal + charm[2];
        $("#charmamount").html(charmtotal);
        if (charmtotal == charmneed){
            winners();
        }
        else if(charmtotal > charmneed){
            loser();
        }
    }

    $("#fourth").onclick = function(){
        charmtotal= charmtotal + charm[3];
        $("#charmamount").html(charmtotal);
        if (charmtotal == charmneed){
            winners();
        }
        else if(charmtotal > charmneed){
            loser();
        }
    }
}




startGame();
});