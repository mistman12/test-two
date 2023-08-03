document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.getElementById("scroll-to-top-btn");
  
    // Show the button when the user scrolls down a certain amount
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollToTopButton.classList.add("show");
      } else {
        scrollToTopButton.classList.remove("show");
      }
    });
  
    // Scroll smoothly to the top when the button is clicked
    scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });