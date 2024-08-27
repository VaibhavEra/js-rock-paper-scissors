// initailizing of score variables
    let humanScore = 0;
    let computerScore = 0;
    let humanscore = document.querySelector('.humanScore')
    let computerscore = document.querySelector('.computerScore')
// initailizing of score variables

// function to get Computer's choice
    function getComputerChoice(max){
        return Math.floor(Math.random()*max);
    }

    let pcAns = getComputerChoice(5)

    if(pcAns == 0)
    {
        console.log("rock")
        pcAns = "rock";
    }
    else if (pcAns == 1)
    {
        console.log("paper")
        pcAns = "paper";
    }

    else if (pcAns == 2)
    {
        console.log("scissors")
        pcAns = "scissors";
    }
    else if (pcAns == 3)
    {
        console.log("lizard")
        pcAns = "lizard";
    }
    else if (pcAns == 4)
    {
        console.log("spock")
        pcAns = "spock";
    }

// function to take humans's choice
    const rock = document.querySelector('.rock')
    const paper = document.querySelector('.paper')
    const scissors = document.querySelector('.scissors')
    const lizard = document.querySelector('.lizard')
    const spock = document.querySelector('.spock')

    let humanAns = "";
    getHumanChoice()

    function getHumanChoice(){
        rock.addEventListener('click', () => {
            console.log("human chose rock")
            humanAns = "rock"      
        })
        paper.addEventListener('click', () => {
            console.log("human chose paper")
            humanAns = "paper"        
        })
        scissors.addEventListener('click', () => {
            console.log("human chose scissors")
            humanAns = "scissors"        
        })
        lizard.addEventListener('click', () => {
            console.log("human chose lizard")
            humanAns = "lizard"  
        })
        spock.addEventListener('click', () => {
            console.log("human chose spock") 
            humanAns = "spock"     
        })
    }
// function to take human's choice

// function to play round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice)
        {
            alert("This Round is a Tie!")
        }
        else if (humanChoice == "rock" && computerChoice == "paper")
        {
            alert("Computer Wins this round by choosing paper!")
            computerScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "scissors")
        {
            alert("Human Wins this round as computer chose scissors!")
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "rock")
        {
            alert("Human Wins this round as computer chose rock!")
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors")
        {
            alert("Computer Wins this round by choosing scissors!")
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock")
        {
            alert("Computer Wins this round by choosing rock!")
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper")
        {
            alert("Human Wins this round as computer chose paper!")
            humanScore++;
        }
    }
// function to play round

playRound(humanAns, pcAns);