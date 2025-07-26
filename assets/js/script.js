document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.depto-swiper').forEach((swiperEl) => {
        const swiperId = swiperEl.id.replace('swiper-', '');
        const nextBtn = document.getElementById(`next-${swiperId}`);
        const prevBtn = document.getElementById(`prev-${swiperId}`);

        new Swiper(swiperEl, {
            loop: true,
            autoplay: { delay: 4000 },
            slidesPerView: 1,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
        });
    });
});

