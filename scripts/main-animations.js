// scripts/animations.js
document.addEventListener("DOMContentLoaded", function () {
  // Animate the box to move 300px to the right over 1 second
  gsap.to("#animated-box", { y: 150, duration: 2 });
  gsap.to("#animated-box2", { y: 250, duration: 1 });
  gsap.to("#animated-box3", { y: 20, duration: 1 });

});
