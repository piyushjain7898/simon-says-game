let gameSeq = [];
let userSeq = [];
let highestValue = [ ];


let btns = ["yellow", "red", "purple", "green"];

let strated = false;
let level = 0;

let h2 = document.querySelector("h2");
let btn = document.querySelectorAll(".btn");

let startButton = document.querySelector(".button")
startButton.addEventListener("click", function () {
  if (strated == false) {
    console.log("game started");
    strated = true;
  }
  levelUp();
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 160);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let randInd = Math.floor(Math.random() * 4);
  let ranColor = btns[randInd];
  let ranbtn = document.querySelector(`.${ranColor}`);
  gameSeq.push(ranColor);
  console.log(gameSeq);

  gameFlash(ranbtn);
}

function checkAns(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } 
  else {
    let highValue = level*2;
    h2.innerHTML = `Game Over ! your score was ${ highValue} <br> press button to Restart`;

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    highestValue.push(highValue);
    record();
    reset();
    
   

  }
}

function btnpress() {
  console.log("button was pressed");
  let btn = this;
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
  userFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnpress);
}
function reset() {
  level = 0;
  started = false;
  gameSeq = [];
  userSeq = [];
}

function record(){

    let maximum = highestValue.reduce((max,el)=>{
        if(max < el){
            return el;
        }else
        return max;
    })
   let h3 = document.createElement("h3")
   h3.innerHTML = `highest record : ${maximum}`
   let div = document.querySelector(".btn-container")
   div.insertAdjacentElement('beforebegin', h3)
   setInterval(function(){
   div.insertAdjacentElement('beforebegin', h3).remove();

   } ,3000);

    
}
