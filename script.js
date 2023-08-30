let timer=10;
let score=0;
let hit=0;


function makeBubble(){
    let clutter='';

for(i=1; i<=168;i++){
    clutter+=`<div class="bubble">${Math.floor(Math.random()*10)}</div> `
}


document.querySelector('#pbtm').innerHTML=clutter;
}

function runTimer(){
    let timerInt=setInterval(function(){
        if(timer>0){
      timer--;
      document.querySelector('#timeVal').textContent=timer;
        }
        else{
            clearInterval();
            document.querySelector('#pbtm').style.display="none";
            document.querySelector('#pbtm2').style.display="flex";
            document.querySelector('span').textContent=score;
        }
    },1000)
}

function hitVal(){
hit=Math.floor(Math.random()*10);
document.querySelector("#hitVal").textContent=hit;
}

function increaseScore(){
    score+=10;
    document.querySelector('#scoreval').textContent=score

}


document.querySelector("#pbtm")
.addEventListener("click",function(el){
    console.log(Number(el.target.textContent));
    let clickedNum=Number(el.target.textContent);
    if(clickedNum===hit){
        increaseScore();
        makeBubble();
         hitVal();
    }

})


function btnClick(){
document.querySelector('#btn1')
.addEventListener("click",function(el){
    timer=20;
    score=0;
    // document.querySelector('#scoreval').textContent=score;
    document.querySelector('#pbtm').style.display="flex";
   document.querySelector('#pbtm2').style.display="none";
makeBubble();
hitVal();


})
}

makeBubble();
runTimer();
hitVal();
btnClick();
// increaseScore();

