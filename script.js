let slideIndex = 0;
const slideInterval = 3000; // Time interval in milliseconds (5 seconds)

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index < 0) slideIndex = slides.length - 1;
  if (index >= slides.length) slideIndex = 0;

  const slideWidth = slides[0].clientWidth;
  const offset = -slideIndex * slideWidth;

  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
  showSlide(--slideIndex);
}

function nextSlide() {
  showSlide(++slideIndex);
}

// Auto-scroll to the next slide every 'slideInterval' milliseconds
function autoScroll() {
  nextSlide();
  setTimeout(autoScroll, slideInterval);
}

// Show the first slide initially
showSlide(slideIndex);

// Start the auto-scroll
setTimeout(autoScroll, slideInterval);

// https://pastebin.com/CYG6zcb0//