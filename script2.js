document.addEventListener('scroll', function() {
    const body = document.querySelector('body');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { 
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});