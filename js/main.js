// Select DOM Items
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const menuImg = document.querySelector('.menu-img');
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of menu

let shodMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!shodMenu) {
    menu.classList.add('show');
    menuBtn.classList.add('close');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    menuImg.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set menu state
    shodMenu = true;
  } else {
    menu.classList.remove('show');
    menuBtn.classList.remove('close');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    menuImg.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set menu state
    shodMenu = false;
  }
}
