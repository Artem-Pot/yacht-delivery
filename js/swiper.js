const swiper = new Swiper('.swiper', {
    loop: true, //зацикливание слайдов до бесконечности
    grabCursor: true, //изменит курсор для перетаскивания
    slideToClickedSlide: true, //переключает на следующий слайд при клике больше 50% от ширины слайда
    speed: 1000, //скорость переключения слайда
    effect: 'fade', //эффект прозрачности при смене слайдов
    fadeEffect: {
        crossFade: true, //дополнение к эффекту fade - параллельная смена прозрачности, добавляет плавность
    },
  
    // нумерация страниц
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Кнопки навигации
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Полоса прокрутки
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 2000, //паузка между прокруткой
        disableOnInteraction: true, // отключить при ручном переключении
    },
  });