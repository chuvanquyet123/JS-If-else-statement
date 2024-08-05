function gameFunny (userChose){
    const randomNumber = Math.random();
        let computerMove = '';
        let result = '';
        let message = '';

        if(randomNumber >= 0 && randomNumber <= 1 / 3){
            computerMove = 'rock';
        }else if (randomNumber >= 1 / 3 && randomNumber < 2/3 ) {
            computerMove = 'papers';
        }else if (randomNumber >= 2/3 && randomNumber <= 1){
            computerMove = 'scissor';
        }

        if (computerMove === userChose){
            result = 'Tie..';
        }else if ((computerMove == 'papers' && userChose == 'rock') || (computerMove == 'rock' && userChose == 'scissor') || (computerMove == 'scissor' && userChose == 'papers')){
            result = 'You lose...';
        }else if ((computerMove == 'scissor' && userChose == 'rock') || (computerMove == 'rock' && userChose == 'papers') || (computerMove == 'papers' && userChose == 'scissor')){
            result = 'You are winner..';
        }
        message=`You are picked ${userChose}, opponents picked ${computerMove}. ${result}!`;
        document.getElementById("message"). innerText= message;
}