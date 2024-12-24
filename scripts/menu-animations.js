
document.addEventListener("DOMContentLoaded", function () {
  gsap.from("#menu-content", { opacity: 0, y: 50, duration: 1 });
});


document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".message", { opacity: 0, duration: 3 }); // 3 seconds fade-in
});
