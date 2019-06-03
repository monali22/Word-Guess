var guessesLeft = document.getElementById("guessLeft");
guessesLeft.textContent=9;
var guessesLeftNum=9;




var wordsPool = ['kuldeep','monali','sonu','arijit'];
var rnum = Math.floor(Math.random() * wordsPool.length);
var selectedWord = wordsPool[rnum];
console.log(selectedWord);


var guessWord = document.getElementById("guessWord");

var fillGuessWord = function(){

    for( var i=0; i<selectedWord.length; i++){

        guessWord.textContent = guessWord.textContent+"-";

    }
}

fillGuessWord();


var guessesSoFar = document.getElementById("guessSoFar");

var wins = document.getElementById("wins");
wins.textContent=0;
var w=0;

var losses = document.getElementById("losses");
losses.textContent=0;
var l=0;




var fillTheChar = function(letter){

    var count =0;

    var wordsArr = guessWord.textContent.split("");



    if(guessSoFar.textContent.includes(letter)){

    }
    else{

        for( var i=0;i<selectedWord.length;i++){

            if(selectedWord[i]===letter){
    
                wordsArr[i]=letter;
    
               // console.log(selectedWord[i]+" "+letter);
    
               // console.log(guessWord.textContent.split(""));
    
            }
            
    
        }

        guessSoFar.textContent = guessSoFar.textContent + " "+ event.key;

        guessesLeft.textContent= --guessesLeftNum;

        guessWord.textContent = wordsArr.toString().replace(/,/g,"");

        
       

        


    }

    

   

    


}



var checkForWin = function(word){

    if(guessWord.textContent==selectedWord){

        wins.textContent = ++w; 
        

    }
    else{

        losses.textContent = ++l;
        return;

    }

}








document.onkeyup = function(event){

    if(guessesLeftNum!=0){


        fillTheChar(event.key);

     }
     else{


        if(guessWord.textContent==selectedWord){

            wins.textContent = ++w; 
            
            
    
        }
        else if(guessesLeft===0){
    
            losses.textContent = ++l;
          
            
    
        }
        
     }

     
    
}
   