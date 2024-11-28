// Function to adjust card widths based on screen size
function adjustCardLayout() {
    const catCards = document.querySelectorAll('.cat-card');
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 480) {
      catCards.forEach(card => card.style.width = '100%');
    } else if (screenWidth <= 768) {
      catCards.forEach(card => card.style.width = '45%');
    } else {
      catCards.forEach(card => card.style.width = '30%');
    }
  }
  
  // Function to handle hover effect
  function addHoverEffect() {
    const catCards = document.querySelectorAll('.cat-card');
    catCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });
  }
  
  // Run functions on page load
  window.addEventListener('load', () => {
    adjustCardLayout();
    addHoverEffect();
  });
  
  // Re-adjust layout when resizing the window
  window.addEventListener('resize', adjustCardLayout);
  