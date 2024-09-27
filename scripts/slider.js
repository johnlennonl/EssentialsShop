const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,   // Muestra 3 productos por slide
    spaceBetween: 15,   // Espacio entre slides
    loop: true,         // Habilita el loop infinito
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,    // Tiempo entre desplazamientos automáticos (en milisegundos)
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {          // Para pantallas de 320px o menos
            slidesPerView: 2,
            spaceBetween: 10,
        },
        480: {          // Para pantallas de 480px o menos
            slidesPerView: 2,
            spaceBetween: 15,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});