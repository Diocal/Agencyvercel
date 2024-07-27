document.addEventListener('DOMContentLoaded', function () {
const carousel = document.querySelector('#carouselExampleCaptions');
if (!carousel) return;

const items = carousel.querySelectorAll('.carousel-item');
const indicators = carousel.querySelectorAll('[data-twe-carousel-indicators] button');
let currentIndex = 0;

const changeSlide = (newIndex) => {
if (newIndex === currentIndex) return;

const direction = newIndex > currentIndex ? 'next' : 'prev';
const currentItem = items[currentIndex];
const nextItem = items[newIndex];

nextItem.classList.add(direction);
requestAnimationFrame(() => {
currentItem.classList.add('slide');
nextItem.classList.add('slide');
nextItem.style.transform = 'scale(1)';
nextItem.style.opacity = '1';

requestAnimationFrame(() => {
currentItem.style.opacity = '0';
currentItem.style.transform = 'scale(1.1)';
});
});

nextItem.addEventListener('transitionend', () => {
currentItem.classList.remove('active', 'slide');
currentItem.style.transform = '';
currentItem.style.opacity = '';
nextItem.classList.remove(direction, 'slide');
nextItem.classList.add('active');
const textContainer = nextItem.querySelector('.text-container');
textContainer.classList.remove('animate-slide-up');
void textContainer.offsetWidth; // trigger reflow
textContainer.classList.add('animate-slide-up');
currentIndex = newIndex;
}, { once: true });

indicators.forEach((indicator, index) => {
indicator.classList.toggle('opacity-100', index === newIndex);
indicator.classList.toggle('opacity-50', index !== newIndex);
});
};

const nextSlide = () => {
const nextIndex = (currentIndex + 1) % items.length;
changeSlide(nextIndex);
};

const prevSlide = () => {
const prevIndex = (currentIndex - 1 + items.length) % items.length;
changeSlide(prevIndex);
};

indicators.forEach((button, index) => {
button.addEventListener('click', () => changeSlide(index));
});

const nextButton = carousel.querySelector('[data-twe-slide="next"]');
const prevButton = carousel.querySelector('[data-twe-slide="prev"]');

if (nextButton) nextButton.addEventListener('click', nextSlide);
if (prevButton) prevButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);
});
