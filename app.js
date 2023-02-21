const square = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const msg = document.querySelector('#msg');
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");


let result = 0;
let hitPosition;
let timerId = null;
let countDownId = null;
let currentTime = 60;

function randomSquare(){
    square.forEach(square =>{
        square.classList.remove('mole');
    })

    let randomSquare = square[Math.floor(Math.random()*9)];
    // console.log(randomSquare);
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
    // console.log(randomSquare.id);
}

square.forEach(square =>{
    square.addEventListener('mousedown' ,()=>{
        if(square.id == hitPosition){
            result++;
            console.log(result);
            score.innerHTML = result;
            hitPosition = null;
        }
    })
})



function start(){

    countDownId = setInterval(countDown, 1000);
    timerId = setInterval(randomSquare, 500);
    // console.log(timerId);
}
// console.log(timerId);


function countDown(){
    currentTime--;
    timeLeft.innerHTML = currentTime;

    if(currentTime==0){
        clearInterval(countDownId);
        clearInterval(timerId);
        msg.innerHTML = 'Gamer Over!'
    }
}

// let countDownId = setInterval(countDown, 1000);

function begin(){
    startBtn.addEventListener("click", start);
    stopBtn.addEventListener("click", ()=>{
        clearInterval(countDownId);
        clearInterval(timerId);
        msg.innerHTML = "Gamer Over!";
        timeLeft.innerHTML = "--";
        square.forEach((square) => {
          square.classList.remove("mole");
        });

    })
    
}


begin();