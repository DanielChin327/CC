document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");

  fetch("navbar.html")
      .then((response) => {
          if (!response.ok) {
              throw new Error(`Failed to load navbar: ${response.statusText}`);
          }
          return response.text();
      })
      .then((html) => {
          navbarContainer.innerHTML = html;
      })
      .catch((error) => {
          console.error("Error loading navbar:", error);
      });
});
