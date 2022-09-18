 //sticky nav js
 let nav = document.querySelector("nav");
 let val;
 window.onscroll = function() {
     if(document.documentElement.scrollTop > 10){
         nav.classList.add("sticky");
     }else{
         nav.classList.remove("sticky");
     }
 }

 var navLinks = document.getElementById("navLinks");
 
 function showMenu(){
     navLinks.style.right = "0";
 }
 function hideMenu(){
     navLinks.style.right = "-200px";
 }


 const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})