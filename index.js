// guess input text area
const guessInput = document.querySelector('#guessInput');
//submit guess Input button
const submitInput = document.getElementById("submitInput")

const resetInput = document.getElementById("resetButton")

//create var for parseINT guess int value 

//gett the h1 element
let h1 = document.querySelector('h1')

//create variable that generates random numbes 1- 100
const randomNumber = Math.floor(Math.random() * 100) + 1;


let counter = 5;

submitInput.addEventListener('click', function(){
    console.log("My guess is: ", parseInt(guessInput.value))
    console.log("Random Number is: " , randomNumber)
    if (counter > 0 ){
    
        counter --; 

    //if guess is right return you win
    if(parseInt(guessInput.value) === randomNumber){
        return h1.textContent = "You Win"
    }else if (counter === 0){
        h1.textContent="You Lose :("
        endGame()
    }
    
    //if guessInput is within 10 numbers return your warm
    else{

        const closeGuess = 10;
    
        const proximity = Math.abs(parseInt(guessInput.value) - randomNumber)
        if (proximity <= closeGuess){
            h1.textContent = "Youre really close!"
        } else if(parseInt(guessInput.value) > randomNumber ){
            h1.textContent = "Guess Lower"
            
        }else if (parseInt(guessInput.value) < randomNumber){
            h1.textContent ="Guess Higher"
        }
        
        
    }

  
}}

)

resetInput.addEventListener('click', resetGame)


// ----------------- Functions -----------------

function endGame(){
    guessInput.disabled  = true; 
    submitInput.disabled = true;


}


function resetGame(){
    h1.textContent = "Guessing Game"
    counter = 5; 
    guessInput.disabled = false; 
    submitInput.disabled = false; 
}

// const conditions = parseInt(guessInput.value) > randomNumber ? "Lower" : "Higher"; 
        
        // h1.textContent = `wrong, try guessing ${conditions}You're within ${proximity}` 





