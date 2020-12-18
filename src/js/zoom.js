let pictureSet = document.querySelectorAll('.featured__img'),
    overlay = document.querySelector('.overlay'),
    modalFrame = document.querySelector('.modal'),
    closeButton = document.querySelector('.modal__close'),
    modalText = document.querySelector('.modal__subtitle');

pictureSet.forEach(function (item, index, array) {
    item.onclick = function () {
        overlay.classList.add('overlay_active');
        modalFrame.prepend(item.cloneNode(true));
        modalText.innerHTML = `Image ${index + 1} of ${array.length}`; 
    };
    
});

function removeOverlay () {
    overlay.classList.remove('overlay_active');
    modalFrame.firstChild.remove();
}
closeButton.onclick = removeOverlay;
overlay.onclick = removeOverlay;