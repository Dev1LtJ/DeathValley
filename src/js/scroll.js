let chevron = document.querySelector('.pageup');

window.addEventListener('scroll', () => {
    window.pageYOffset > 1500 ? chevron.classList.remove('pageup_fade') : chevron.classList.add('pageup_fade');
});

window.addEventListener('click', (event) => {
    let elem = event.target.dataset.scrollId;
    if (!elem) return;
    let targetElement = document.getElementById(elem);
    targetElement.scrollIntoView({ behavior: 'smooth' });
});

