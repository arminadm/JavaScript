//User choose:
const choicesImages = document.querySelectorAll(".img-items");
const cpuImages = document.querySelectorAll(".img-cpu-choosed");
for (let i = 0; i < 3; i++){      
    choicesImages[i].addEventListener("click", function(){
        let cpuChoice = Number(Math.floor(Math.random()*1000))%3;
        console.log(cpuChoice);
        for (let j = 0; j < 3; j++){
            if (i != j){
                choicesImages[j].classList.add("hidden");
            }
        }
        for (let j = 0; j < 3; j++){
            if (j == cpuChoice){
                cpuImages[j].classList.remove("hidden");
            }
            else{
                cpuImages[j].classList.add("hidden");
            }
        }
        gameLogic(i, cpuChoice);
    });
}

function gameLogic(user, cpu){
    userBord = document.querySelector("#user-point");
    cpuBord = document.querySelector("#cpu-point");
    if (user != cpu){
        if (user == 0){//kaqaz
            if (cpu == 1){//sang
                userBord.innerHTML = Number(userBord.innerHTML) + 1;
            }
            else{//gheychi
                cpuBord.innerHTML = Number(cpuBord.innerHTML) + 1;
            }
        }
        if (user == 1){//sang
            if (cpu == 2){//gheychi
                userBord.innerHTML = Number(userBord.innerHTML) + 1;
            }
            else{//kaqaz
                cpuBord.innerHTML = Number(cpuBord.innerHTML) + 1;
            }
        }
        if (user == 2){//gheychi
            if (cpu == 0){//kaqaz
                userBord.innerHTML = Number(userBord.innerHTML) + 1;
            }
            else{//sang
                cpuBord.innerHTML = Number(cpuBord.innerHTML) + 1;
            }
        }
    }
}

function refresh(){
    for (let i = 0; i < 3; i++){
        choicesImages[i].classList.remove("hidden");
    }
    for (let i = 0; i < 3; i++){
        cpuImages[i].classList.add("hidden");
    }
}

document.querySelector("button").addEventListener('click', function(){
    refresh();
});

document.addEventListener('keydown', (e)=>{
    if (e.key == "r"){
        refresh();
    }
});