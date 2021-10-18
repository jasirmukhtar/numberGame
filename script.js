'use strict'
let hScore=0;
document.querySelector(".guess").value='';
let score=20;
let secretNumber=Math.trunc(Math.random()*20)+1;
document.querySelector(".check").addEventListener("click",function(){
    const guess=Number(document.querySelector(".guess").value);
    if(guess===secretNumber){
        document.querySelector(".message").textContent="You're Right";
        document.querySelector("body").style.backgroundColor='#00EAD3';
        document.querySelector(".number").textContent=secretNumber;
        if(score>hScore){
            hScore=score;
            document.querySelector(".highscore").textContent=hScore;
        }
        

    }
    else if(guess<secretNumber){
        document.querySelector(".score").textContent=score-=1;
        document.querySelector(".message").textContent="Too low"
    }
    else if(guess>secretNumber){
        document.querySelector(".score").textContent=score-=1;
        document.querySelector(".message").textContent="Too high"   
    }
})
document.querySelector(".again").addEventListener("click",function(){
    secretNumber=Math.trunc(Math.random()*20)+1;
    score=20;
    document.querySelector(".message").textContent="Start guessing...";
    document.querySelector(".score").textContent=score;
    document.querySelector("body").style.backgroundColor='#222';
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value='';
})