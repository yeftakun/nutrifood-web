let numberOfSlides = document.querySelectorAll('.slider section').length;
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const slider = document.querySelector('.slider');

let sectionIndex = 0;

function resetSlider() {
    Array.from(slider.children).forEach((section) => {
        section.style.opacity = 0;
        section.style.zIndex = 0;
    });
}

function showSlide(index) {
    slider.children[index].style.opacity = 1;
    slider.children[index].style.zIndex = 1;
}

right.addEventListener('click', () => {
    resetSlider();
    sectionIndex = (sectionIndex < numberOfSlides - 1) ? sectionIndex + 1 : 0;
    showSlide(sectionIndex);
});

left.addEventListener('click', () => {
    resetSlider();
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : numberOfSlides - 1;
    showSlide(sectionIndex);
});
