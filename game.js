document.addEventListener('DOMContentLoaded', function() {
    let results = document.querySelector('.results');
    let playerText = document.querySelector('.playerText');
    let computerText = document.querySelector('.computerText');
    let playerScore = 0;
    let computerScore = 0;
    
// Function to randomly select computer's choice
    function getComputerChoice() {
        const arr = ["rock", "paper", "scissors"];
        const choice = arr[Math.floor(Math.random() * arr.length)];
        return choice;
    }

    function endGame(computerScore,playerScore) {  
    let winner;
    if (computerScore > playerScore) {
        winner = "Computer";
        results.textContent = "Computer wins the game. Reload the page to try again!"
        buttons.forEach(button => {
            button.disabled = true;
        });
    }
    else if (playerScore > computerScore){ 
        winner = "You";
        results.textContent = `${winner} win the game congrats. Reload the page to try again!`
        buttons.forEach(button => {
            button.disabled = true;
        });
    }else{
        
    }

    }
   
    // Function to determine round result
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
                results.textContent = "This Round was a Tie:("
                tie++
        } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
                   playerSelection === 'paper' && computerSelection === 'rock' ||
                   playerSelection === 'scissors' && computerSelection === 'paper') {
                playerScore++
                results.textContent = 'You win this round!:)'
                playerText.textContent = `Player: ${playerScore}`
            } else {
            computerScore++
            results.textContent = "The computer wins this round:("
            computerText.textContent = `Computer: ${computerScore}`
        
        }
        checkScore(playerScore, computerScore)

        return 
       
    };
        
    function checkScore(playerScore, computerScore){
        if (playerScore == 5 || computerScore === 5) {
            endGame(computerScore,playerScore)
        }
    }
        
    let buttons = document.querySelectorAll('input')
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
         let playerSelection = button.id
         let computerSelection = getComputerChoice()
         console.log(computerSelection);
         playRound(playerSelection, computerSelection);
          
        })
      })
        
});