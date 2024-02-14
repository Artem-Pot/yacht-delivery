let imagePopup = document.getElementById("imagePopup");
let boxPopup = document.querySelector('.box-popup');
let popupImage = document.getElementById("popupImage");

function changingBlockSize(){
  boxPopup.style.width = popupImage.clientWidth + 'px';
  boxPopup.style.height = popupImage.clientHeight + 'px';
}

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
  
  window.onresize = reportWindowSize;

//закрытие просмотра изображения
function closeImage() {
  imagePopup.style.display = "none";
  document.body.style.overflow = "auto";
}
