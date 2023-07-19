// JavaScript Code

// Digital clock 
function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateClock, 1000);

// menu toggle 
let menu = document.querySelector('.menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})
 
// blur effect when menu is clicked 
function toggle(){
    let blur = document.getElementById('blur');
    blur.classList.toggle('active');
    let navbar = document.getElementsByClassName('navbar');
    navbar.classList.toggle('active');
}

// remove menu when li is clicked
let nav = document.querySelector('#nav');
let removeNav = document.querySelector('.navbar');

nav.addEventListener('click', () => {
    removeNav.classList.remove('active');
})



window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    Blur.classList.remove('active');
}


