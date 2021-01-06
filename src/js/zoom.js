let modalFrame = document.querySelector('.modal'),
    actualModalFrameWidth = 1,
    overlay = document.querySelector('.overlay'),
    closeButton = document.querySelector('.modal__close'),
    modalImage = document.querySelector('.modal__img'),
    left = document.querySelector('.modal__left'),
    right = document.querySelector('.modal__right'),
    modalText = document.querySelector('.modal__subtitle'),
    pictureSet = document.querySelectorAll('.featured__img'),
    pictureWrapper = document.querySelector('.featured__rows-wrapper').firstElementChild;

    pictureWrapper.addEventListener('click', makeCarousel);

function makeCarousel () {
    if (event.target.tagName != 'IMG') return;
    let image = event.target,
        index = image.dataset.id,
        array = pictureSet;
    overlayToggle();
    showImage(modalImage, image);
    modalIn(modalFrame);
    showMessage(modalText, index, array);
    hideArrow(index);
    right.addEventListener('click', () => {
        showImage(modalImage, array[++index]);
        hideArrow(index);
        showMessage(modalText, index, array);
    });
    left.addEventListener('click', () => {
        showImage(modalImage, array[--index]);
        hideArrow(index);
        showMessage(modalText, index, array);
    });
}

closeButton.addEventListener('click', () => {
    secondaryInOut ();
    setTimeout(() => {modalOut(modalFrame)}, 1000);
});

right.addEventListener('mouseover', () => {right.style.opacity = '1';});
right.addEventListener('mouseout', () => {right.style.opacity = '0.33';});
left.addEventListener('mouseover', () => {left.style.opacity = '1';});
left.addEventListener('mouseout', () => {left.style.opacity = '0.33';});


function modalIn (elem) {
    let elemWidth = actualModalFrameWidth;
    elem.style.display = 'block';
    let timer = setTimeout(function run() {
        if (elemWidth >= 45) {
            clearTimeout(timer);
            secondaryInOut ();
        } else {
            elem.style.width = elemWidth + '%';
            elemWidth = elemWidth + elemWidth * 0.05;
            setTimeout(run, 10);
            actualModalFrameWidth = elemWidth;
        }
    }, 10);
}

function modalOut (elem) {
    let elemWidth = actualModalFrameWidth;
    let timer = setTimeout(function run() {
        if (elemWidth <= 1) {
            clearTimeout(timer);
            clearImage(modalImage);
            elem.style.display = 'none';
            showArrows ();
            overlayToggle ();
        } else {
            elem.style.width = elemWidth + '%';
            elemWidth = elemWidth - elemWidth * 0.05;
            setTimeout(run, 10);
            actualModalFrameWidth = elemWidth;
        }
    }, 10);
}

function secondaryInOut () {
    setTimeout(() => {
        closeButton.classList.toggle('modal__close_fade');
        modalText.classList.toggle('modal__subtitle_fade');
        left.classList.toggle('modal__left_fade');
        //left.hidden == true ? left.hidden = false : left.hidden = true;
        right.classList.toggle('modal__right_fade');
        //right.hidden == true ? right.hidden = false : right.hidden = true;
    }, 50);
}

function overlayToggle () {
    overlay.classList.toggle('overlay_fade');
}

function showImage (modalImage, targetImage) {
    modalImage.setAttribute('src', targetImage.getAttribute('src'));
    modalImage.setAttribute('alt', targetImage.getAttribute('alt'));
}

function clearImage (modalImage) {
    modalImage.setAttribute('src', '');
    modalImage.setAttribute('alt', '');
}

function hideArrow (index) {
    if (index == 0) {
        left.hidden = true;
    } else if (index == pictureSet.length-1) {
        right.hidden = true;
    } else {
        left.hidden = false;
        right.hidden = false;
    }
}

function showArrows () {
    left.hidden = false;
    right.hidden = false;
}

function showMessage(elem, index, array) {
    elem.innerHTML = `Image ${+index + 1} of ${array.length}`;
}