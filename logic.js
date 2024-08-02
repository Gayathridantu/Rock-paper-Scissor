let user_score=0;
let computer_score=0;
const choice=document.querySelectorAll(".option");
const msg=document.querySelector("#ms");
const u_count=document.querySelector("#user_score");
const c_count=document.querySelector("#computer_scores");
//generating computer choice;
const gencompchoice=()=>{
    const a=["Rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return a[randidx];
}
//displaying draw message;
const drawgame=()=>{
    console.log("ITS DRAW MATCH");
    msg.innerText="ITS A DRAW";
}
//display resukt of game;
const showWinner=(userwin,userChoice,compchoice)=>{
    if(userwin==true){
      console.log("YOU WIN");
      msg.innerText=`You win ${userChoice} beats ${compchoice}`;
      user_score++;
      u_count.innerText=user_score;
    }
    else{
    console.log("YOU Loose");
    msg.innerText=`You Loose ${compchoice} beats ${userChoice}`;
    computer_score++;
    c_count.innerText=computer_score;
}
}
//actuall logic;;
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //choice
    const compchoice=gencompchoice();
    console.log("compchoice=",compchoice);
    //game behind scenes;
    if(userChoice==compchoice){
          drawgame();
    }
    else{
        let userwin=true;
        if(userChoice==="Rock"){
            userwin=(compchoice==="paper")?false:true;
            
        }
        else if(userChoice==="paper"){
            userwin=(compchoice==="Rock")?true:false;
        }
        else{
             userwin=(compchoice=="Rock")?false:true;
            }
        showWinner(userwin,userChoice,compchoice);
    }
}
//we are generating each value clicked by user;
choice.forEach((option)=>{
       option.addEventListener("click",()=>
       {
         const userChoice=option.getAttribute("id");
         playGame(userChoice);
       });
});

