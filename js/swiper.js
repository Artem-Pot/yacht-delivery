const swiper = new Swiper('.swiper', {
    loop: true, //зацикливание слайдов до бесконечности
    grabCursor: true, //изменит курсор для перетаскивания
    speed: 1500, //скорость переключения слайда
 
    effect: 'fade', //эффект прозрачности при смене слайдов
    fadeEffect: {
        crossFade: true, //дополнение к эффекту fade - параллельная смена прозрачности, добавляет плавность
    },
  
    direction: 'horizontal', //горизонтальный слайдер

    pagination: {     // нумерация страниц
      el: '.swiper-pagination',
    },
  
    navigation: {     // Кнопки навигации
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {    // Полоса прокрутки
      el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 10000, //паузка между прокруткой
        disableOnInteraction: true, // отключить при ручном переключении
    },

    keyboard: { //прокрутка с помощью клавиатуры
      enabled: true,
      onlyInViewport: false,
    },

    mousewheel: { //отключение прокрутки с помощью мыши
      invert: false,
    },
    // autoHeight: true,
  });