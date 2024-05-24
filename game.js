let gameSeq=[];
let userSeq=[];

let started= false;
let level=0;

let highest=0;

let btns=["yellow","green","red","purple"];

let h3=document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started == false){
        started=true;
        levelUp();
    }
    
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },350);
    
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    
}

function levelUp (){
    userSeq=[];
   
    level++;
    h3.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
        gameFlash(randbtn);
}

    function checkAns(idx){
       
        if(userSeq[idx]==gameSeq[idx]){
            if(userSeq.length==gameSeq.length){
               setTimeout(levelUp(),1000);
            }

        }
        else{
             
            if(highest<=level){
                highest=level;
               
         }

            h3.innerHTML =`<b>Highest Score : ${highest} </b> <br> Game Over! Your Score is <b> ${level} </b> <br> Press any key to start game`
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function (){
                document.querySelector("body").style.backgroundColor="white";

            },200);

            playSound();
           

            
            reset();
        }
    }

 function btnPress(){
     let btn=this;
     userFlash(btn);
     userColor=btn.getAttribute("id");
     userSeq.push(userColor);
      
     checkAns(userSeq.length-1);

 }
 let allBtns=document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click", btnPress)
 ;}

 function reset (){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    

 }
 function playSound(){
    let audio=new Audio("negative_beeps-6008.mp3");
    audio.play();
 }