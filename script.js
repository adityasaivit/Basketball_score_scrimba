let first=0
let second=0

function firstone()
{
    first+=1;
    document.querySelector(".score-one").innerText=first;
}

function firstthree()
{
    first+=3;
    document.querySelector(".score-one").innerText=first;
}

function firstfive(){
    first+=5
    document.querySelector(".score-one").innerText=first;
}

function secondone(){
    second+=1
    document.querySelector(".score-two").innerText=second

}

function secondthree(){
    second+=3
    document.querySelector(".score-two").innerText=second

}

function secondfive(){
    second+=5
    document.querySelector(".score-two").innerText=second
}

function reset(){
    document.querySelector(".score-one").innerText=0;
    document.querySelector(".score-two").innerText=0;
}