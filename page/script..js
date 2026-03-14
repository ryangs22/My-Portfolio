let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let isAnimating = false;

    menuIcon.onclick = () => {
        if (isAnimating) return;
        if (navbar.classList.contains('active')) closeMenu();
        else openMenu();
    }

function openMenu() {
    isAnimating = true;
    navbar.classList.add('active');
    menuIcon.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    const links = navbar.querySelectorAll('a');
    links.forEach((link, index) => {
        link.style.transitionDelay = `${0.1 * index}s`;
        link.style.transform = 'translateY(-20px)';
        link.style.opacity = '0';
    });
    void navbar.offsetWidth;
    
    setTimeout(() => {
        links.forEach((link, index) => {
            link.style.transitionDelay = `${0.1 * index}s`;
            link.style.transform = 'translateY(0)';
            link.style.opacity = '1';
        });
        
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }, 10);
}

function closeMenu() {
    isAnimating = true;
        
    const links = navbar.querySelectorAll('a');
    links.forEach((link, index) => {
        link.style.transitionDelay = `${0.1 * (links.length -index - 1)}s`;
        link.style.transform = 'translateY(-20px)';
        link.style.opacity = '0';
    });
    setTimeout(() => {
        navbar.style.maxHeight = '0';
        navbar.style.opacity = '0';
            
    setTimeout(() => {
        navbar.classList.remove('active');
            menuIcon.classList.remove('active');
            navbar.removeAttribute('style');
            links.forEach(link => {
                link.removeAttribute('style');
            });
                
            document.body.style.overflow = '';
            isAnimating = false;
        }, 500);
    }, 300);
}

document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && !menuIcon.contains(e.target) && navbar.classList.contains('active')) {
                closeMenu();
            }
        });
