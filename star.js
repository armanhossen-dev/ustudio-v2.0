function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    
    const size = Math.random() * 3 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 2 + 's';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    return star;
}

function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    
    shootingStar.style.left = Math.random() * 100 + '%';
    shootingStar.style.top = Math.random() * 50 + '%';
    shootingStar.style.animationDelay = Math.random() * 5 + 's';
    shootingStar.style.animationDuration = (Math.random() * 2 + 2) + 's';
    
    return shootingStar;
}

function initStars() {
    const starsContainer = document.getElementById('stars');
    
    // Create regular stars
    for (let i = 0; i < 200; i++) {
        starsContainer.appendChild(createStar());
    }
    
    // Create shooting stars
    for (let i = 0; i < 5; i++) {
        starsContainer.appendChild(createShootingStar());
    }
}

function generateMoreStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 50; i++) {
        starsContainer.appendChild(createStar());
    }
}

let shootingStarsVisible = true;
function toggleShootingStars() {
    const shootingStars = document.querySelectorAll('.shooting-star');
    shootingStarsVisible = !shootingStarsVisible;
    
    shootingStars.forEach(star => {
        star.style.display = shootingStarsVisible ? 'block' : 'none';
    });
}

// Initialize the starfield when the page loads
document.addEventListener('DOMContentLoaded', initStars);

// Add new shooting stars periodically
setInterval(() => {
    if (shootingStarsVisible) {
        const starsContainer = document.getElementById('stars');
        const newShootingStar = createShootingStar();
        starsContainer.appendChild(newShootingStar);
        
        // Remove the shooting star after animation completes
        setTimeout(() => {
            if (newShootingStar.parentNode) {
                newShootingStar.parentNode.removeChild(newShootingStar);
            }
        }, 5000);
    }
}, 3000);