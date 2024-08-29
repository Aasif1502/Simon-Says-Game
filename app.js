let h3 = document.querySelector("h3")
let gameSeq = [];
let userSeq = [];
let level = 0
let highestScore = 0
let start = false;
let startbtn = document.querySelector("h4")
 let gameClr = ["pink","yellow","green","violet"]
startbtn.addEventListener("click", function() {
   level = -1
   gameSeq = []
    levelUp();
     this.innerHTML = "Game started"
     if(start == false) {
      console.log("game started")
       
     }
     start = true;
     h3.innerHTML = "level 1";
   
})
 function levelUp() {
    userSeq = []
    level++;
    h3.innerHTML = `level ${level}`
    let idx = Math.floor(Math.random() * 4)
   let randomClr = gameClr[idx];
   let randombtn = document.querySelector(`.${randomClr}`)
   flash(randombtn);
   gameSeq.push(randomClr);
   console.log(gameSeq)
 }
 function flash(randombtn) {
     randombtn.classList.add("white");
     setTimeout(function() {
        randombtn.classList.remove("white")
     },100) 
    
 }
 function check(idx) {  
   if(userSeq[idx] == gameSeq[idx]) {
      if(userSeq.length == gameSeq.length) {
         setTimeout(levelUp,500)
      }
      console.log("same")
   } else {
      h3.innerHTML = `Game over! your score is ${level}. press any key to restart.`
      hScore();
      reset();
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function() {
         document.querySelector("body").style.backgroundColor = "white";
      },300 );
      
   }
 }
 function btnPress() {
   console.log("button was pressed")
   let btn = this;
   flash(btn)
    let userClr = btn.getAttribute("id")
    userSeq.push(userClr)
    console.log(userSeq);
    check(userSeq.length-1);
 }
 let btns = document.querySelectorAll(".btn")
 for(btn of btns) {
   btn.addEventListener("click",btnPress)}
   
  function hScore() {
   if(highestScore<level) {
     document.querySelector("h5").innerText =  `Highest score: ${level}`;
     highestScore = level;
  } 
}
function reset() {
   level = 0;
   gameSeq = []
   start = false
   userSeq = []
   startbtn.innerHTML = "Start Game"
}