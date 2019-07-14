var wins = 0;
var losses = 0;
//guesses i have left
var guess = 9;
// values is the input guess
var values = [];
var letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 var winsDisplay = document.getElementById("wins");
 var lossesDisplay = document.getElementById("losses");
 var guessDisplay = document.getElementById("guessLeft");


    document.onkeyup = function (click) {

        var personGuess = String.fromCharCode(click.keyCode).toLowerCase();//make it to lowercase
        console.log("Persons choice " + personGuess);

        var random = letters[Math.floor(Math.random() * letters.length)];//pick random letter for computer
           console.log("Random choice " + random);
       
            var check = letters.includes(personGuess);
            console.log("check",check);

       
        if(check === false) {
            alert("Please enter a letter");
            return false;
        } 
        else if (check === true) {
            if (personGuess === random) {
                alert ("Winner Winner, Chicken Dinner");
                wins++;
                reset();
                console.log(wins);

            } else if (personGuess !== random) {
                guess--;
                console.log(guess);
                
            } if (guess === 0) {
                losses++;
                alert ("Try again, Loser");
                reset();

            }
            //yourGuess.push(personGuess);
        }   
        function reset(){
            random ="";
            personGuess ="";
            guess = 9;
        }

         winsDisplay.innerHTML = ("Wins:" + wins);
         lossesDisplay.innerHTML = ("Losses:" + losses);
         guessDisplay.innerText = ("Guesses Left:" + guess);
         
 };
