// Get all menu items
const menuItems = document.querySelectorAll('.menu-item');

// Add event listeners for hover effects
menuItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('hover-glow');
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('hover-glow');
  });
});
