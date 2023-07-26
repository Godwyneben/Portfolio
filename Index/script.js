// JavaScript Code

// Digital clock 
function updateClock() {
    var now = new Date();
        hours = now.getHours().toString().padStart(1, '0');
        minutes = now.getMinutes().toString().padStart(2, '0');
        seconds = now.getSeconds().toString().padStart(2, '0');

        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

}

setInterval(updateClock, 1000);

// menu toggle 
let menu = document.querySelector('.menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

// blur effect when menu is clicked 
function toggle() {
    let blur = document.getElementById('blur');
    blur.classList.toggle('active');
    let navbar = document.getElementsByClassName('navbar');
    navbar.classList.toggle('active');
}

// remove blur effect when projects is clicked
let project = document.querySelector('#project');
let Blur = document.querySelector('#blur');
let Menu = document.querySelector('.menu-bar');

project.addEventListener('click', () => {
    Blur.classList.remove('active');
    menu.classList.toggle('fa-times');
})

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    Blur.classList.remove('active');
}

const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', checkSections);
checkSections();
// transition on scroll 
function checkSections() {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });

}
