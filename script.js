let barsElem = document.querySelector('.bars')
let linksElem = document.querySelector('.links')
let crossElem = document.querySelector('.cross-btn')
let navElem = document.querySelector('nav')
let bodyElem = document.querySelector('body')
let scrollBtn = document.querySelector(".scroll-button a");

barsElem.onclick = function(){
    linksElem.classList.add("clicked")
    barsElem.style.opacity = 0;
}

crossElem.onclick = function(){
    linksElem.classList.remove("clicked")
    barsElem.style.opacity = 1;
}

window.onscroll = function(){
    if (document.documentElement.scrollTop > 20){
        navElem.classList.add("sticky");
        scrollBtn.style.display = "block";
    }
    else{
        navElem.classList.remove("sticky")
        scrollBtn.style.display = "none";
    }
}


let navLinks = document.querySelectorAll(".links li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    linksElem.classList.remove("clicked");
    barsElem.style.opacity = "1";
    // menuBtn.style.pointerEvents = "auto";
  });
}




