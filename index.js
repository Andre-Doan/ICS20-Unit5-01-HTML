    let y = Math.floor(Math.random() * 6 + 1);
    // counting the number of guesses 
    // made for correct Guess 
    let guess = 1; 
    document.getElementById("submitguess").onclick = function(){ 
       
   let x = document.getElementById("guessField").value; 
   
   if(x == y) 
   {     
       alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
               + guess + " GUESS , You win a pencil that looks oddly like a pen!!! "); 
   } 
   else if(x > y) /* if guessed number is greater 
                   than actual number*/ 
   {     
       guess++; 
       alert("You got it wrong, you have 1 more try left "); 
   } 
   else
   { 
       guess++; 
       alert("Incorrect Answer!!! You ran out of tries, please insert 5 more tokens to continue") 
   } 
} 