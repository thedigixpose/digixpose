// script.js

document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "Where Strategy Meets Digital",
    "Your Brand, Our Creativity",
    "Designs That Convert"
  ];

  const target = document.getElementById("hero-heading");
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    target.textContent = currentPhrase.substring(0, charIndex);

    if (!isDeleting && charIndex < currentPhrase.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 1200);
    }
  }

  type();

  const track = document.querySelector(".marquee-track");
  track.addEventListener("mouseover", () => {
    track.style.animationPlayState = "paused";
  });
  track.addEventListener("mouseout", () => {
    track.style.animationPlayState = "running";
  });
});