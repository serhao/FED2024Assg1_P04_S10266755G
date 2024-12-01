// Select all elements with the class 'menu-item'
document.querySelectorAll('.menu-item').forEach(item => {

  // Event listener for mouse entering the menu item (hover effect)
  item.addEventListener('mouseenter', () => {
    // Scale up the menu item slightly when hovered over
    item.style.transform = 'scale(1.05)';
    // Add a shadow effect to make the item look elevated
    item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  });

  // Event listener for mouse leaving the menu item (reset the effect)
  item.addEventListener('mouseleave', () => {
    // Reset the scale of the menu item back to normal
    item.style.transform = 'scale(1)';
    // Reset the box shadow to a smaller effect
    item.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  });
});



