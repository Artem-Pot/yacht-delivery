let boxPopup = document.querySelector('.box-popup');
let popupImage = document.getElementById("popupImage");

function showImage(imageSrc) {
    popupImage.src = imageSrc;
     
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "block";

    document.body.style.overflow = "hidden";

    //окно = размеру изображения для позиционирования крестика закрытия просмотра
    boxPopup.style.width = popupImage.clientWidth + 'px';
    boxPopup.style.height = popupImage.clientHeight + 'px';
  }

function closeImage() {
  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "none";
  document.body.style.overflow = "auto";
}