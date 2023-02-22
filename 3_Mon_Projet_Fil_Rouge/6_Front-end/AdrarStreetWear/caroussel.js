const slides = document.querySelectorAll(".Image"); // je sélectionne mes classes image
const nextSlide = document.querySelector(".btn-next"); // bouton suivant
const prevSlide = document.querySelector(".btn-prev"); // bouton précédent

let curSlide = 0; // slide actuel
let maxSlide = slides.length -2; // slide a ne pas dépasser

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`; 
});

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
});

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
});
