// Select the box element
const box = document.getElementById("box");

// Create an animation with GSAP
gsap.to(box, {
  x: 300, // Move 300px horizontally
  rotation: 360, // Rotate 360 degrees
  duration: 2, // Duration of 2 seconds
  ease: "power1.inOut", // Easing function
  repeat: -1, // Infinite repetition
  yoyo: true, // Reverse the animation each cycle
});
