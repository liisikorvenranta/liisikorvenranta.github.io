function guessTheNumber() {
    var own = Number(document.getElementById("number").value);
    var random = Math.floor(Math.random()*10) + 1;
    
    if (own === random) {
        alert("You guessed it!");
    } else if (own%1 !== 0 || own < 0 || own > 10)  {
        alert("The number has to be a whole number between 0 and 10.")
    } else {
        alert("Boo try again!");
        console.log(random);
    }
}

