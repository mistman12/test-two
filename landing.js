const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Close the menu when a link is clicked (optional, for better user experience)
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
  });
});


