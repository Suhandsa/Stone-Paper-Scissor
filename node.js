let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const gencompchoice= () =>{
    const option=["rock","paper","scissors"];
    const randindx=Math.floor(Math.random()*3);
    return option[randindx];
}

const drawGame= () =>{
    msg.innertext="Game was Draw.play again."
    msg.Style.backgroundColor = "#311868" ;

};
const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win!,your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lost!, ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor="red";

    }
}
const playGame = (userChoice)=>{
    const compChoice = gencompchoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper"?false:true;
        }else if( userChoice === "paper"){
            userWin = compChoice ==="scissors"?false:true;
        }else{
            userWin = compChoice ==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});