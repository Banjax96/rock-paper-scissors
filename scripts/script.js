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

console.log(getComputerChoice());

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;