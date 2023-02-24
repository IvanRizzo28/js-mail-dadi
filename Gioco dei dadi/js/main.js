'use strict';

const play=document.getElementById("play");
const scoreUtente=document.getElementById("scoreUtente");
const scorePc=document.getElementById("scorePc");
const dadoUtente=document.getElementById("dadoUtente");
const dadoPc=document.getElementById("dadoPc");

let score1=0,score2=0;

play.addEventListener("click",function(){
    let tmp1=Math.floor(Math.random() * 6) + 1;
    let tmp2=Math.floor(Math.random() * 6) + 1;
    dadoUtente.innerHTML=tmp1;
    dadoPc.innerHTML=tmp2;
    if(tmp1>tmp2){
        score1++;
        scoreUtente.innerHTML="score: "+score1;
    }
    else if(tmp2>tmp1){
        score2++;
        scorePc.innerHTML="score: "+score2;
    }
});