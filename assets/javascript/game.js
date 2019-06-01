var word = document.getElementById("guessWord");
console.log(word);

var singerName = ['Kuldeep','Monali','Sonu','Arijit'];
var rnum = Math.floor(Math.random() * singerName.length);
var selectedSinger=singerName[rnum];
console.log(selectedSinger);

var myFun = function(selectedSinger){
  
    for(var i=0;i<selectedSinger.length;i++){
        word.textContent=word.textContent+""+"-";
    }
}

myFun(selectedSinger);

var guesses = document.getElementById('guessLeft');
guesses.textContent=9;
var i=9;

var guessSoFar = document.getElementById("guessSoFar");
console.log(guessSoFar);


document.onkeyup = function(event){
 guessingFun(event.key);
}

var guessingFun = function(letter){
    
    if(i!==0){

        console.log(letter);
        replaceChar(letter);
        guessSoFar.textContent= guessSoFar.textContent + " " +  letter;
        i--;
        guesses.textContent=i;
    }

}

 function replaceChar(letter){

    console.log(selectedSinger.indexOf(letter));
    var ind = selectedSinger.indexOf(letter);
    console.log(word.textContent.charAt(ind));
    word.textContent = word.textContent.replace(word.textContent.charAt(ind),letter);

}


