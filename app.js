// initailizing of score variables
    let humanScore = 0;
    let computerScore = 0;
    const comp_score = document.querySelector('.computerScore')
    const human_score = document.querySelector('.humanScore')

// to get Computer's choice randomly
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];

    function playGame(humanAns){
        let pcAns = choices[Math.floor(Math.random()*5)];
        console.log("Computer chose =",pcAns)
        console.log("Human chose =",humanAns)
        playRound(humanAns, pcAns)
    }


// to get humans's choice
    const humanChoice = document.querySelectorAll('.choice')
    
    humanChoice.forEach((choice) => {
        choice.addEventListener("click", () => {
            const humanAns = choice.id;
          playGame(humanAns)
        })
    })


// play round
    function playRound(hChoice, pChoice){

        if (hChoice === pChoice)
        {
            console.log("The game is tie")
            message.style.backgroundColor = "white";
            message.style.color = "#589595";
            message.innerText = "The Round is Tie!"
        }
        else if (hChoice == "rock")
        {
            if (pChoice == "paper" || pChoice == "spock")
            {
                console.log("The round is won by computer")
                message.style.backgroundColor = "red"
                message.style.color = "white"
                message.innerText = "The round was won by Computer"
                computerScore++;
                comp_score.innerText = computerScore;
            }
            else if (pChoice == "lizard" || pChoice =="scissors")
            {
                console.log("The round is won by Humans")
                message.style.backgroundColor = "green"
                message.style.color = "white"
                message.innerText = "The round was won by Humans"
                humanScore++;
                human_score.innerText = humanScore;
            }
        }
        else if (hChoice == "paper")
        {
            if (pChoice == "lizard" || pChoice == "scissors")
            {
                console.log("The round is won by computer")
                message.style.backgroundColor = "red"
                message.style.color = "white"
                message.innerText = "The round was won by Computer"
                computerScore++;
                comp_score.innerText = computerScore;
            }
            else if (pChoice == "spock" || pChoice =="rock")
                {
                    console.log("The round is won by Humans")
                    message.style.backgroundColor = "green"
                    message.style.color = "white"
                    message.innerText = "The round was won by Humans"
                    humanScore++;
                    human_score.innerText = humanScore;
                }
        }
        else if (hChoice == "scissors")
        {
            if (pChoice == "spock" || pChoice == "rock")
            {
                console.log("The round is won by computer")
                message.style.backgroundColor = "red"
                message.style.color = "white"
                message.innerText = "The round was won by Computer"
                computerScore++;
                comp_score.innerText = computerScore;
            }
            else if (pChoice == "paper" || pChoice =="lizard")
                {
                    console.log("The round is won by Humans")
                    message.style.backgroundColor = "green"
                    message.style.color = "white"
                    message.innerText = "The round was won by Humans"
                    humanScore++;
                    human_score.innerText = humanScore;
                }
        }
        else if (hChoice == "spock")
        {
            if (pChoice == "lizard" || pChoice == "paper")
            {
                console.log("The round is won by computer")
                message.style.backgroundColor = "red"
                message.style.color = "white"
                message.innerText = "The round was won by Computer"
                computerScore++;
                comp_score.innerText = computerScore;
            }
            else if (pChoice == "rock" || pChoice =="scissors")
                {
                    console.log("The round is won by Humans")
                    message.style.backgroundColor = "green"
                    message.style.color = "white"
                    message.innerText = "The round was won by Humans"
                    humanScore++;
                    human_score.innerText = humanScore;
                }
        }
        else if (hChoice == "lizard")
        {
            if (pChoice == "rock" || pChoice == "scissors")
            {
                console.log("The round is won by computer")
                message.style.backgroundColor = "red"
                message.style.color = "white"
                message.innerText = "The round was won by Computer"
                computerScore++;
                comp_score.innerText = computerScore;
            }
            else if (pChoice == "paper" || pChoice =="spock")
                {
                    console.log("The round is won by Humans")
                    message.style.backgroundColor = "green"
                    message.style.color = "white"
                    message.innerText = "The round was won by Humans"
                    humanScore++;
                    human_score.innerText = humanScore;
                }
        }
        if (humanScore == 5 || computerScore == 5)
            {
                if(alert('Game Over!')){}
                else window.location.reload(); 
            }        
    }

// message box
    const message = document.querySelector('#message')

// game end and new game

    