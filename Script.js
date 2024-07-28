userScore = 0;
compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg")
const yourScorepara = document.querySelector(".You")
const compScorepara = document.querySelector(".Comp")

let compChoice = () =>{
    let options = ["rock","paper","scissors"];
    const index = Math.floor(Math.random()*3);
    return options[index]
}
let gameDraw = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was Draw"
}
let showWinner = (userWin,choiceID,compchoice) =>{
    if(userWin){
        console.log("You win");
        msg.innerText =  `You Won! your ${compchoice} beats ${choiceID}`;
        msg.style.backgroundColor = "green"
        userScore++
        yourScorepara.innerText = userScore
    }else{
        console.log("you lose");
        msg.innerText = `You Lose ${choiceID} beats your ${compchoice}`;
        msg.style.backgroundColor = "Red"
        compScore++
        compScorepara.innerText = compScore
    }
}

let playGame = (choiceID,) =>{
    console.log("user choice =",choiceID)
    let compchoice = compChoice()
    console.log("comp choice =",compchoice)

    if(choiceID === compchoice){
        gameDraw()
    }else{
        let userWin = true;
        if(choiceID === "rock"){
            userWin = compchoice ==="paper" ? false : true; 
        }else if(choiceID === "paper"){
            userWin = compchoice ==="scissors" ? false : true; 
        }else{
            userWin = compchoice ==="rock" ? false : true; 
        }
        showWinner(userWin,compchoice,choiceID)
    }
}
 
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let choiceID = choice.getAttribute("id")
        playGame(choiceID)
        
    })

})