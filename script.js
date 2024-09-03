
var random1=Math.random();
random1=Math.floor(random1*6)+1;
console.log(random1)
var ImageRandom1=("assects/dice"+random1+".svg");

var Image1=document.querySelector(".imgg1");
Image1.setAttribute("src",ImageRandom1);

var random2=Math.random();
random2=Math.floor(random2*6)+1;
console.log(random2)
var ImageRandom2=("assects/dice"+random2+".svg");
var Image1=document.querySelector(".imgg2");
Image1.setAttribute("src",ImageRandom2);

var winner=document.querySelector("h1");
if(random1==random2){
    winner.textContent="Draw";
}else if(random1>random2){
    winner.textContent="Winner Player 1🏆";
}else{
    winner.textContent="Winner Player 2🏆";
}