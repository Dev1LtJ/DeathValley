let chevron = document.querySelector('.pageup'),
    contactButton = document.querySelector('.promo__btn');

window.addEventListener('scroll', () => {
    window.pageYOffset > 1500 ? chevron.classList.remove('pageup_hidden') : chevron.classList.add('pageup_hidden');
});

chevron.onclick = () => window.scrollTo(0, 0);
contactButton.onclick = () => document.querySelector('.contacts').scrollIntoView();