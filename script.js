function toggleMenu(){
const menu=document.getElementById("menu");
menu.classList.toggle("active");
}


/* scroll reveal animation */

function reveal(){

const reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;
let visible=100;

if(elementTop<windowHeight-visible){
reveals[i].classList.add("active");
}

}

}

window.addEventListener("scroll",reveal);