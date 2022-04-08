/////////////////////////////////////////////////////////////////////////////////////////////////variables
//Variables:
let playerTurn = 0;
let currentScores = [0,0];
const diceImage = document.querySelector("img");
const totalScorePlayerOne = document.getElementById("Score-player-one");
const totalScorePlayerTwo = document.getElementById("Score-player-two");
const currentScorePlayerOne = document.getElementById("holding-player-one");
const currentScorePlayerTwo = document.getElementById("holding-player-two");
const profilePlayerOne = document.getElementById("player-one");
const profilePlayerTwo = document.getElementById("player-two");


/////////////////////////////////////////////////////////////////////////////////////////////////main
//Pressing Roll dice
document.getElementById("Roll").addEventListener('click', function(){
    let dice = Math.trunc(Math.random()*6)+1;
    diceImage.src = `./images/dice${dice}.jpg`;
    diceImage.classList.remove("hidden");
    scoring(dice);
});

//Pressing hold button
document.getElementById("Hold").addEventListener('click', function(){
    //Depositing holding to total score
    if (playerTurn == 0){
        totalScorePlayerOne.innerHTML = Number(totalScorePlayerOne.innerHTML) + currentScores[0];
        currentScorePlayerOne.innerHTML = 0;
    }
    else if (playerTurn == 1){
        totalScorePlayerTwo.innerHTML = Number(totalScorePlayerTwo.innerHTML) + currentScores[1];
        currentScorePlayerTwo.innerHTML = 0;
    }
    currentScores[playerTurn] = 0;
    diceImage.classList.add("hidden");
    winner();
    switchPlayer();
});

//Pressing Restart button
document.getElementById("restart").addEventListener('click', function(){
    //Clear all the data and able all the settings
    currentScores = [0,0];
    totalScorePlayerOne.innerHTML = 0;
    totalScorePlayerTwo.innerHTML = 0;
    currentScorePlayerOne.innerHTML = 0;
    currentScorePlayerTwo.innerHTML = 0;

    document.getElementById("Roll").disabled = false;
    document.getElementById("Hold").disabled = false;
    profilePlayerOne.classList.remove("winner");
    profilePlayerTwo.classList.remove("winner");
});

//First time turn
turn();

/////////////////////////////////////////////////////////////////////////////////////////////////funcs
//Counting the Current score, switching player if dice turned 1
function scoring(dice){
    if (dice == 1){
        currentScores[playerTurn] = 0;
        currentScorePlayerOne.innerHTML = 0;
        currentScorePlayerTwo.innerHTML = 0;
        switchPlayer();
    }
    else{
        //2, 3, 4, 5, 6
        currentScores[playerTurn] += dice;
        if (playerTurn == 0){
            currentScorePlayerOne.innerHTML = currentScores[0];
        }
        else if (playerTurn == 1){
            currentScorePlayerTwo.innerHTML = currentScores[1];
        }
    }
}

//Switching the turn of players
function switchPlayer(){
    if (playerTurn == 0){
        playerTurn = 1;
        currentScores[0] = 0;
        turn();
    }
    else{
        playerTurn = 0;
        currentScores[1] = 0;
        turn();
    }
}

//Showing the turn
function turn(){
    if (playerTurn == 0){
        profilePlayerOne.classList.add("active");
        profilePlayerTwo.classList.remove("active");
    }
    else if (playerTurn == 1){
        profilePlayerTwo.classList.add("active");
        profilePlayerOne.classList.remove("active");
    }
}

//After each hold we have to check if any of the players is winner or not,
//if any of the player won, alert it and disable everything except restart
function winner(){
    if (playerTurn == 0){
        if (Number(totalScorePlayerOne.innerHTML) >= 100){
            profilePlayerOne.classList.add("winner");
            diceImage.classList.add("hidden");
            document.getElementById("Roll").disabled = true;
            document.getElementById("Hold").disabled = true;
            alert("Player One won!!!");
        }
    }
    else if (playerTurn == 1){
        if (Number(totalScorePlayerTwo.innerHTML) >= 100){
            profilePlayerTwo.classList.add("winner");
            diceImage.classList.add("hidden");
            document.getElementById("Roll").disabled = true;
            document.getElementById("Hold").disabled = true;
            alert("Player Two won!!!");
        }
    }
}