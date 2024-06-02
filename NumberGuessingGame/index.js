const min = 1;
const max = 100;

let number = Math.floor(Math.random() * max) + min;
var flag = true;
var attempt = 0;
let numbers = [];

while(flag && numbers.length < 10) {
    var guessedNumber = window.prompt("Guess a number (1-100): ");
    guessedNumber = Number(guessedNumber);
    
    if(isNaN(guessedNumber) || guessedNumber < min || guessedNumber > max) {
        window.alert("Enter a valid number!");
    }
    else if(numbers.includes(guessedNumber)) {
        window.alert("You already guessed that number!");
    }
    else {
        if(guessedNumber === number) {
            window.alert("Congratulations: " + number);
            flag = false; 
        } 
        else {
            numbers.push(guessedNumber); // Corrected: Now correctly adding the guessed number
            if(numbers.length === 10) {
                window.alert("You lose! The number was " + number);
                flag = false;
            }
            else {
                if(guessedNumber > number) {
                    window.alert("Down!");
                    // attempt++;
                } 
                else if(guessedNumber < number){
                    window.alert("Up!");
                    // attempt++;
                }
            }    
        }
            
    }     
}
