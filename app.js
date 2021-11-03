const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('.logo');

//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


// Close mobile menu when clicked
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');

    if (window.innerWidth <= 730 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);


//Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-link');
    const servicesMenu = document.querySelector('#services-link');
    const appsMenu = document.querySelector('#apps-link');
    const testimonialsMenu = document.querySelector('#testimonials-link');
    const aboutMenu = document.querySelector('#about-link');
    let scrollPos = window.scrollY;

    //adding .highlight class to menu list
    if(window.innerWidth > 1000 && scrollPos < 400) {
        homeMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 1000 && scrollPos < 2150) {
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.add('highlight');
        appsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 1000 && scrollPos < 2700) {
        servicesMenu.classList.remove('highlight');
        appsMenu.classList.add('highlight');
        testimonialsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 1000 && scrollPos < 3300) {
        appsMenu.classList.remove('highlight');
        testimonialsMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 1000 && scrollPos < 10000) {
        testimonialsMenu.classList.remove('highlight');
        aboutMenu.classList.add('highlight');
        return;
    }

    if((elem && window.innerWidth < 960 && scrollPos <600 || elem)) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);



