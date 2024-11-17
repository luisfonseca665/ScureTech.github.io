document.addEventListener('DOMContentLoaded', () => {
    // Animación de navegación
    anime({
        targets: '.nav-link',
        opacity: [0, 1],
        translateY: [-20, 0],
        delay: anime.stagger(100, { start: 500 }),
        duration: 1000,
        easing: 'easeOutExpo',
    });

    // Animaciones específicas por página
    const pageTitle = document.querySelector('h1');
    if (pageTitle) {
        anime({
            targets: 'h1, p, .btn',
            opacity: [0, 1],
            translateY: [50, 0],
            delay: anime.stagger(200, { start: 700 }),
            duration: 1000,
            easing: 'easeOutExpo',
        });
    }
});
