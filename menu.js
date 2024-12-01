document.addEventListener("DOMContentLoaded", () => {
  // Select all menu items
  const menuItems = document.querySelectorAll('.menu-item');

  // Check if there are any menu items
  if (menuItems.length === 0) {
    console.error('No menu items found!');
    return;
  }

  // Loop through each menu item
  menuItems.forEach(item => {
    // When mouse enters a menu item
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.02)';
      item.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
    });

    // When mouse leaves a menu item
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
      item.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
  });
});

