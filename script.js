document.addEventListener('DOMContentLoaded', () => {
    // Efecto de carga suave
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 600,
        easing: 'ease-in-out-quad',
        once: true,
        offset: 120
    });
    
    // Actualizar año en el footer
    document.querySelector('.current-year').textContent = new Date().getFullYear();
    
    // Manejar el scroll suave
    const smoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };
    
    // Optimización para móviles - Viewport Height
    const setVhUnit = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    // Manejar el hover en dispositivos táctiles
    const handleTouchHover = () => {
        if ('ontouchstart' in window) {
            document.body.classList.add('touch-device');
        }
    };
    
    // Inicializar funciones
    smoothScroll();
    setVhUnit();
    handleTouchHover();
    
    // Event listeners
    window.addEventListener('resize', setVhUnit);
    
    // Precarga de imágenes críticas
    const preloadImages = () => {
        const images = [
            'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1549213783-8284d0336c4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ];
        
        images.forEach(img => {
            const image = new Image();
            image.src = img;
        });
    };
    
    // Precargar imágenes después de que todo lo crítico esté cargado
    if (document.readyState === 'complete') {
        preloadImages();
    } else {
        window.addEventListener('load', preloadImages);
    }
});