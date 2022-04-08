let random = Math.floor(Math.random()*100);
console.log(random);
document.querySelector("#check").addEventListener('click', function(){
    let userGuess = Number(document.querySelector("#userGuess").value);
    if (userGuess >= 1){
        let result = document.querySelector("#result");
        if (userGuess > random){
            result.innerHTML = "Your guess is too big";
            result.style.color = "red";
        }
        else if (userGuess < random){
            result.innerHTML = "Your guess is too short";
            result.style.color = "red";
        }
        else{
            result.innerHTML = "You won!!!";
            result.style.color = "white";
            document.querySelector("#game").style.backgroundColor = "darkgreen";
        }
    }
});
