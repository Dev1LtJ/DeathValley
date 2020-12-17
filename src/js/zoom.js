let pictureSet = document.querySelectorAll('.featured__img');

pictureSet.forEach(function (item, index) {
    item.onclick = function () {
        document.querySelector('.overlay').classList.add('overlay_active');
        let frame = document.querySelector('.modal');
        frame.innerHTML = item.cloneNode(true);
        console.log(frame);
        console.log(item);
    };
});