// mv swiper
var mvSwiper = new Swiper('.mv__swiper', {

    autoplay: {
        delay: 2100
    }, 
    speed: 1800,
    effect: 'fade',
});

// gallery swiper
var gallerySwiper = new Swiper('.gallery__swiper', {
    loop: true,
    slidesPerView: "auto", //必須
    centeredSlides: true, //1枚目のスライド中央配置
    spaceBetween: 70 //間隔
});