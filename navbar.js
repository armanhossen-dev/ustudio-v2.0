// Close menu when clicking on overlay
document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('sidebar-active').checked = false;
});

// Close menu when clicking on a menu item (for better UX)
document.querySelectorAll('.menuUL a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('sidebar-active').checked = false;
    });
});

// Handle hamburger to X transformation
const checkbox = document.getElementById('sidebar-active');
const hamburgerIcon = document.querySelector('.open-sidebar-button i');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        hamburgerIcon.className = 'fa-solid fa-xmark';
    } else {
        hamburgerIcon.className = 'fa-solid fa-bars';
    }
});


// JavaScript Scroll Detection:
let lastScrollTop = 0;
const menu = document.querySelector('.menuUL');

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop < lastScrollTop) {
    // Scrolling up - show menu
    menu.style.right = '0';
  } else {
    // Scrolling down - hide menu
    menu.style.right = '-100%';
  }

  lastScrollTop = scrollTop;
});

