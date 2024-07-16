let first=0
let second=0

function lead(){
    if(first>second){
        document.querySelector(".lead").innerText="Lead: "+"ONE"

    }
    else{
        document.querySelector(".lead").innerText="lead: "+"TWO"
    }
}

function firstone()
{
    first+=1;
    document.querySelector(".score-one").innerText=first;
    lead()
}

function firstthree()
{
    first+=3;
    document.querySelector(".score-one").innerText=first;
    lead()
}

function firstfive(){
    first+=5
    document.querySelector(".score-one").innerText=first;
    lead()
}

function secondone(){
    second+=1
    document.querySelector(".score-two").innerText=second
    lead()
}

function secondthree(){
    second+=3
    document.querySelector(".score-two").innerText=second
    lead()
}

function secondfive(){
    second+=5
    document.querySelector(".score-two").innerText=second
    lead()
}

function reset(){
    document.querySelector(".score-one").innerText=0;
    document.querySelector(".score-two").innerText=0;
    first=0
    second=0
}