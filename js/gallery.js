const imagePopup = document.getElementById("imagePopup");
const boxPopup = document.querySelector('.box-popup');
const popupImage = document.getElementById("popupImage");
const next = document.querySelector('.next-button');
const back = document.querySelector('.back-button');
const gallery = document.querySelector('.gallery');

function showImage(imageSrc) {
    popupImage.src = imageSrc;
    imagePopup.style.display = "block";
    document.body.style.overflow = "hidden";
    changingBlockSize();
}

//окно = размеру изображения для позиционирования крестика закрытия просмотра
function reportWindowSize() {
  changingBlockSize();
}
  
function changingBlockSize(){
  boxPopup.style.width = popupImage.clientWidth + 'px';
  boxPopup.style.height = popupImage.clientHeight + 'px';
}

window.onresize = reportWindowSize;

//закрытие просмотра изображения
function closeImage() {
  imagePopup.style.display = "none";
  document.body.style.overflow = "auto";
}

//кнопка слайдер вперёд слайдера
next.addEventListener('click', function(e) {
  let imageSrc = popupImage.src.slice(0, -6).slice(-1) === '/' ? popupImage.src.slice(0, -6) : popupImage.src.slice(0, -5); //проверка конца url на наличие /
  let imageNumber = popupImage.src.slice(0, -6).slice(-1) === '/' ? popupImage.src.slice(-6, -4) : popupImage.src.slice(-5, -4); //порядковый номер изображения
  let newImages;
  
  if (imageNumber < 1) {
    newImages = `${imageSrc}${+imageNumber - 1}.jpg`;
  }

  else if (imageNumber >= gallery.childElementCount) {
    newImages = `${imageSrc}1.jpg`;
  }

  else {
    newImages = `${imageSrc}${+imageNumber + 1}.jpg`;
  }

  popupImage.src = newImages;
  changingBlockSize();
  if (event.isComposing || event.keyCode === 112) {
    console.log('12345');
    
  }
})

//кнопка назад слайдера
back.addEventListener('click', function() {
  let imageSrc = popupImage.src.slice(0, -6).slice(-1) === '/' ? popupImage.src.slice(0, -6) : popupImage.src.slice(0, -5); //проверка конца url на наличие /
  let imageNumber = popupImage.src.slice(0, -6).slice(-1) === '/' ? popupImage.src.slice(-6, -4) : popupImage.src.slice(-5, -4); //порядковый номер изображения
  let newImages;

  if (imageNumber < 2) {
    newImages = `${imageSrc}${gallery.childElementCount}.jpg`;
  }

  else {
    newImages = `${imageSrc}${+imageNumber - 1}.jpg`;
  }

  popupImage.src = newImages;
  changingBlockSize();
})
