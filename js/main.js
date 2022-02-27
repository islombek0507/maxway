const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
var elbtn = document.querySelector(".header__sun");
 burger.addEventListener("click", function(){
     if(!burger.classList.contains("header__burger--close")){
        //  burger.classList.add("header__burger--open")
         burger.classList.add("header__burger--close");
         nav.classList.add("header__nav--open");
         elbtn.classList.add("header__sun--sun");
         
       
     }else{
         burger.classList.remove("header__burger--close");
        //  burger.classList.remove("header__burger--open")
        //  nav.classList.remove("header__nav--open");
         nav.classList.add("header__nav--close");
         elbtn.classList.remove("header__sun--sun");

     }
 })
 nav.addEventListener("animationend", function(evt){
     
    if(evt.animationName=="close"){
        
        nav.classList.remove("header__nav--open");
        nav.classList.remove("header__nav--close");
        elbtn.classList.remove("header__sun--sun");
    }
})
var elbtn = document.querySelector(".header__sun");
var body = document.querySelector(".body");
elbtn.addEventListener("click", function(){
    
    if(!elbtn.classList.contains("header__sun--moon")){
        elbtn.classList.add("header__sun--moon");
        elbtn.classList.remove("header__sun--sun");
        body.classList.add("body__tun");
        
    }else{
        elbtn.classList.remove("header__sun--moon");
        elbtn.classList.add("header__sun--sun");
        body.classList.remove("body__tun");
    }
})

