const btns = document.querySelectorAll("button");
const body = document.querySelector("body");
let human = 0;
let comp = 0;

const output = document.createElement("div");
body.appendChild(output);

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (human < 5 && comp < 5){
            let win = playRound(btn.id, getComputerChoice());
            if (win == "human"){
                human += 1;
            }
            if (win == "computer"){
                comp += 1;
            }
            output.textContent = `${win} wins!\nHuman wins: ${human}\nComputer wins: ${comp}`;
        } else {
            output.textContent += ` GAME OVER! ${(human === 5 ? "Human" : "Computer")} wins!`
        }
    });
});

function getComputerChoice(){
    let hand = "";
    let num = Math.floor(Math.random() * 3);
    
    switch(num) {
        case 0:
            hand = "rock";
            break;
        case 1:
            hand = "paper";
            break;
        case 2:
            hand = "scissors";
            break;
    }

    return hand;
}

function getHumanChoice() {
    let hand = prompt("What hand do you throw: ");
    
    return hand;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let win = 0;

    console.log(computerChoice);

    if (computerChoice == "rock"){
        if (humanChoice == "paper"){
            win = 1;
        }
        if (humanChoice == "scissors"){
            win = 2;
        }
    }
    if (computerChoice == "paper"){
        if (humanChoice == "scissors"){
            win = 1;
        }
        if (humanChoice == "rock"){
            win = 2;
        }
    }
    if (computerChoice == "scissors"){
        if (humanChoice == "rock"){
            win = 1;
        }
        if (humanChoice == "paper"){
            win = 2;
        }
    }

    if (win == 0){
        console.log(`Tie! You and the computer both threw ${humanChoice}.`)
        return "tie";
    }
    if (win == 1){
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        return "human";
    }
    if (win == 2){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        return "computer";
    }
}

