const container = document.querySelector('.bordered-grid');
const scrollIcon = document.getElementById('scroll-icon');

scrollIcon.addEventListener('click', () => {
    container.scrollTo({
        left: container.scrollWidth,
        behavior: 'smooth'
    });
    container.addEventListener('scroll', checkScrollEnd);
});

function checkScrollEnd() {
    console.log(container.clientWidth);
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        scrollIcon.classList.add('visually-hidden');
        container.removeEventListener('scroll', checkScrollEnd);
    }
}