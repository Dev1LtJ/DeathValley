let pictureSet = document.querySelectorAll('.featured__img'),
    overlay = document.querySelector('.overlay'),
    modalFrame = document.querySelector('.modal'),
    closeButton = document.querySelector('.modal__close'),
    modalImage = document.querySelector('.modal__img'),
    leftArrow = document.querySelector('.modal__leftArrow'),
    rightArrow = document.querySelector('.modal__rightArrow'),
    modalText = document.querySelector('.modal__subtitle');

// window.addEventListener('click', (event) => {
//     let image = event.target;
//     if (image.className != "featured__img") return;
//     overlay.classList.add('overlay_active');

// });

pictureSet.forEach(function (item, index, array) {
    item.onclick = function () {
        overlay.classList.add('overlay_active');
        modalFrame.classList.remove('modal_fadeOut');
        modalFrame.classList.add('modal_fadeIn');
        modalImage.setAttribute('src', item.getAttribute('src'));
        modalImage.setAttribute('alt', item.getAttribute('alt'));
        modalText.innerHTML = `Image ${index + 1} of ${array.length}`;
        if (index == 0) {
            leftArrow.classList.add('modal__leftArrow_hidden');
            rightArrow.classList.remove('modal__rightArrow_hidden');
        } else if (index == array.length - 1) {
            rightArrow.classList.add('modal__rightArrow_hidden');
            leftArrow.classList.remove('modal__leftArrow_hidden');
        }
        //Почему при вынесении leftArrow и rightArrow за пределы item неправильно работает index?
        //Почему индекс прыгает два раза?
        leftArrow.addEventListener ('click', () => {
            rightArrow.classList.remove('modal__rightArrow_hidden');
            modalImage.setAttribute('src', array[index > 0 ? --index : index = 0].getAttribute('src'));
            modalImage.setAttribute('alt', array[index].getAttribute('alt'));
            modalText.innerHTML = `Image ${index + 1} of ${array.length}`;
            if (index == 0) leftArrow.classList.add('modal__leftArrow_hidden');
            console.log(index);
        });
        rightArrow.addEventListener ('click', () => {
            leftArrow.classList.remove('modal__leftArrow_hidden');
            modalImage.setAttribute('src', array[index < (array.length - 1) ? ++index : index = (array.length - 1)].getAttribute('src'));
            modalImage.setAttribute('alt', array[index].getAttribute('alt'));
            modalText.innerHTML = `Image ${index + 1} of ${array.length}`;
            if (index == array.length - 1) rightArrow.classList.add('modal__rightArrow_hidden');
            console.log(index);
        });
    };
});

function removeOverlay () {
    modalFrame.classList.remove('modal_fadeIn');
    modalFrame.classList.add('modal_fadeOut');
    modalImage.setAttribute('src', '');
    modalImage.setAttribute('alt', '');
    leftArrow.classList.remove('modal__leftArrow_hidden');
    rightArrow.classList.remove('modal__rightArrow_hidden');
    overlay.classList.remove('overlay_active');
}
closeButton.onclick = removeOverlay;

leftArrow.addEventListener ('mouseover', () => {
    leftArrow.style.opacity = '1';
});
leftArrow.addEventListener ('mouseout', () => {
    leftArrow.style.opacity = '0.33';
});
rightArrow.addEventListener ('mouseover', () => {
    rightArrow.style.opacity = '1';
});
rightArrow.addEventListener ('mouseout', () => {
    rightArrow.style.opacity = '0.33';
});