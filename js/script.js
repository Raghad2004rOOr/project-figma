let menuBtn = document.getElementById('menu-btn');
let mobileMenu = document.getElementById('mobile-menu');
let menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

});

window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('opacity-0');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
});