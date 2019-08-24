//reset scrores
export function RPSCapsule(){
    let clearUScore = document.getElementById('yourScore')
    let clearBScore = document.getElementById('botScore')

    // let botScore = document.getElementById('botScore');
    clearUScore.innerHTML = 0;
    clearBScore.innerHTML = 0;
    } 

    function maxScore() {
    let clearUScore = document.getElementById('yourScore')
    let clearBScore = document.getElementById('botScore')
        if (clearUScore.innerHTML >= 5 || 
            clearBScore.innerHTML >= 5) {
                RPSCapsule();
    }
    
}
//game
export function RPS(e) {
    let userChoice = '';
    let terminator = '';
    let choices = ['rock', 'paper', 'scissors'];
 
    //bot functions
    //random number generator for the bot
    let randomN = Math.random();
    let range = Math.floor(randomN * 3);
    
    //allocating the index number to the array
    terminator = choices[range];
    
    //printing the option of the bot to the screen
    document.getElementById('machine').innerHTML = terminator;
    
    //User Related functions
    //allocating the index number to the array
    if (e.target === document.getElementById('rock')) {
        userChoice = choices[0];
    } else if (e.target === document.getElementById('paper')) {
        userChoice = choices[1];
    } else if(e.target === document.getElementById('scissors')) {
        userChoice = choices[2];
    };
    //printing the choice of the bot
    document.getElementById('yourChoice').innerHTML = userChoice;


    //outcomes of the choice combinations
    let result = document.getElementById('result');
    if (userChoice === 'rock' && terminator === 'rock') {
        result.innerHTML= 'Draw';
    } else if (userChoice === 'rock' && terminator === 'scissors') {
        result.innerHTML= 'rock beats scissors';
        win();
    } else if (userChoice === 'rock' && terminator === 'paper') {
        result.innerHTML= 'rock loses to paper';
        lose();
    } else if (userChoice === 'paper' && terminator === 'rock') {
        result.innerHTML='paper beats rock';
        win();
    } else if (userChoice === 'paper' && terminator === 'paper') {
        result.innerHTML='Draw';
    } else if (userChoice === 'paper' && terminator === 'scissors') {
        result.innerHTML='Paper loses to scissors';
        lose();
    } else if (userChoice === 'scissors' && terminator === 'rock') {
        result.innerHTML='scissors loses to rock';
        lose();
    } else if (userChoice === 'scissors' && terminator === 'paper') {
        result.innerHTML='scissors beats paper';
        win();
    } else if (userChoice === 'scissors' && terminator === 'scissors') {
        result.innerHTML='Draw';

   
    }
}

//additional functions
function win() {
    let i= Number(document.getElementById('yourScore').innerHTML);
    i++;
    document.getElementById('yourScore').innerHTML = i;
    maxScore();
    
    }
function lose(){
    let i= Number(document.getElementById('botScore').innerHTML);
    i++;
    document.getElementById('botScore').innerHTML = i;
    maxScore();
}
