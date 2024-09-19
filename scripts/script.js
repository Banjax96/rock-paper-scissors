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

console.log(getComputerChoice());