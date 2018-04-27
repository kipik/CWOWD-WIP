
var burgerButton = document.querySelector('.burger__button');
var mobileNav = document.querySelector('.mobile-nav');

function openMobile() {
    mobileNav.classList.add('open');
}

function closeMobile() {
    mobileNav.classList.remove('open');
}

burgerButton.addEventListener('click', openMobile);
mobileNav.addEventListener('click', closeMobile);
