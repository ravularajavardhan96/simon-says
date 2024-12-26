let gameSeq = [];
let userSeq = [];
let arr=[];
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let btns=["red","yellow","green","purple"];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("The game got started");
        started = true;
    }
    levelUp();
});

function checkAns (idx) {

    if(userSeq[idx] === gameSeq[idx]){
         if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000);
         }
    }
    else{
        h2.innerHTML=`Game over! your score was <b>${level}</b><br> Press any key to start`;
        arr.push(level);
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";

        },150);
        h3.innerText=`Highest score is ${max(arr)}`;
        reset();
    }
    
}


function levelUp () {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randInd=Math.floor(Math.random()*4);
    let randCol=btns[randInd];
    let colBtn=document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);


    gameFlash(colBtn);
} 

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);


}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    },250);
   
}

let allBtns=document.querySelectorAll(".box");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function btnPress () {
    userFlash(this);
    let col=this.getAttribute("id");
   userSeq.push(col);
   checkAns(userSeq.length-1);
}


function reset(){
    level=0;
    start=false;
    userSeq=[];
    gameSeq=[];
}


function max (arr) {
    let max=0;
    for (i of arr){
        if(i>max){
            max=i;
        }
    }
    
    return max;


}


