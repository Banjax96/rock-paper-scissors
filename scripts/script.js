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

function playGame() {
    let round = 0;
    let humanScore = 0;
    let computerScore = 0;

    while (round < 5){
        let win = playRound(getHumanChoice(), getComputerChoice());
        if (win == "human"){
            humanScore += 1;
        }
        if (win == "computer"){
            computerScore += 1;
        }

        console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`)

        round += 1;
    }
}

playGame();
