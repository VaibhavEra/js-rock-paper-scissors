// initailizing of score variables
    let humanScore = 0;
    let computerScore = 0;
    const comp_score = document.querySelector('.computerScore')
    const human_score = document.querySelector('.humanScore')

    const message = document.querySelector('#message')

// to get humans's choice
    const humanChoice = document.querySelectorAll('.choice')
        
    humanChoice.forEach((choice) => {
        choice.addEventListener("click", () => {
            const humanAns = choice.id;
            playGame(humanAns)
        })
    })


// to get Computer's choice randomly
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];

    function playGame(humanAns){
        let pcAns = choices[Math.floor(Math.random()*5)];
        console.log("Computer chose =",pcAns)
        console.log("Human chose =",humanAns)
        playRound(humanAns, pcAns)
    }


// play round
    function playRound(hChoice, pChoice){

        if (hChoice === pChoice)
        {
            console.log("The game is tie")
            message.style.backgroundColor = "white";
            message.style.color = "#589595";
            message.innerText = `The Round is Tie! Both chose ${hChoice}`
        }
        else if (hChoice == "rock")
        {
            if (pChoice == "paper" || pChoice == "spock")
            {
                console.log("The round is won by computer")
                message.style.backgroundColor = "red"
                message.style.color = "white"
                message.innerText = `The round was won by Computer as they chose ${pChoice} and you chose ${hChoice}`
                computerScore++;
                comp_score.innerText = computerScore;
            }
            else if (pChoice == "lizard" || pChoice =="scissors")
            {
                console.log("The round is won by Humans")
                message.style.backgroundColor = "green"
                message.style.color = "white"
                message.innerText = `The round was won by Humans as you chose ${hChoice} and they chose ${pChoice}`
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
                message.innerText = `The round was won by Computer as they chose ${pChoice} and you chose ${hChoice}`
                computerScore++;
                comp_score.innerText = computerScore;
            }
            else if (pChoice == "spock" || pChoice =="rock")
            {
                console.log("The round is won by Humans")
                message.style.backgroundColor = "green"
                message.style.color = "white"
                message.innerText = `The round was won by Humans as you chose ${hChoice} and they chose ${pChoice}`
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
                message.innerText = `The round was won by Computer as they chose ${pChoice} and you chose ${hChoice}`
                computerScore++;
                comp_score.innerText = computerScore;
            }
            else if (pChoice == "paper" || pChoice =="lizard")
            {
                console.log("The round is won by Humans")
                message.style.backgroundColor = "green"
                message.style.color = "white"
                message.innerText = `The round was won by Humans as you chose ${hChoice} and they chose ${pChoice}`
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
                message.innerText = `The round was won by Computer as they chose ${pChoice} and you chose ${hChoice}`
                computerScore++;
                comp_score.innerText = computerScore;
            }
            else if (pChoice == "rock" || pChoice =="scissors")
            {
                console.log("The round is won by Humans")
                message.style.backgroundColor = "green"
                message.style.color = "white"
                message.innerText = `The round was won by Humans as you chose ${hChoice} and they chose ${pChoice}`
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
                message.innerText = `The round was won by Computer as they chose ${pChoice} and you chose ${hChoice}`
                computerScore++;
                comp_score.innerText = computerScore;
            }
            else if (pChoice == "paper" || pChoice =="spock")
            {
                console.log("The round is won by Humans")
                message.style.backgroundColor = "green"
                message.style.color = "white"
                message.innerText = `The round was won by Humans as you chose ${hChoice} and they chose ${pChoice}`
                humanScore++;
                human_score.innerText = humanScore;
            }
        }
        if  (humanScore == 5 || computerScore == 5)
            {
                setTimeout(() => {gameover(humanScore, computerScore)}, 100)
            }
    }

// function when game is over and want to restart
    function gameover(h,c){
        if(h > c)
        {
            alert(`Final Score was:\nHumans: ${h}\nBots: ${c}\nHumans Win!`)
            if(alert('Game Over!\nClick on "OK" to play again!')){}
            else window.location.reload(); 
        }
        else if(h < c)
        {
            alert(`Final Score was:\nHumans: ${h}\nBots: ${c}\nBOTS Win!`)
            if(alert('Game Over!\nClick on "OK" to play again!')){}
            else window.location.reload(); 
        }
    }





    