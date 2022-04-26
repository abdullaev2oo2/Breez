const mobileNavbar = document.getElementById('mobile-navbar');
const navBtn = document.getElementById('mobile-nav-open');
const navCloseBtn = document.getElementById('nav-close');

navBtn.addEventListener("click", () => {
    if(!navBtn.classList.contains('none')) {
        mobileNavbar.classList.remove('closed')
        mobileNavbar.classList.add('opened')
    }
});

navCloseBtn.addEventListener("click", () => {
    mobileNavbar.classList.add('closed')
    mobileNavbar.classList.remove('opened')
});

