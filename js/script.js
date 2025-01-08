document.querySelectorAll('.slideshow').forEach((slideshow) => {
  const slides = slideshow.querySelectorAll('.slide');
  const dots = slideshow.querySelectorAll('.dot');
  let currentSlide = 0;
  const slideDuration = 5000; // 5 seconds per slide

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Start slideshow
  setInterval(nextSlide, slideDuration);

  // Initialize first slide
  showSlide(currentSlide);
});
