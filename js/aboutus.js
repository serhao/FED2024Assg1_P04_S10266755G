// Function to update layout based on window size
function updateLayout() {
  const aboutSection = document.querySelector('.about-section');
  const imageRow = document.querySelector('.image-row');
  const aboutText = document.querySelector('.about-text');
  const aboutImage = document.querySelector('.about-image');
  
  if (window.innerWidth <= 768) {
    // For screens less than or equal to 768px wide (tablet/mobile)
    aboutSection.style.flexDirection = 'column';
    aboutSection.style.textAlign = 'center';
    aboutText.style.flex = '100%';
    aboutImage.style.flex = '100%';
    aboutImage.style.marginTop = '20px';
    imageRow.style.flexDirection = 'column'; // Stack images vertically
    imageRow.querySelectorAll('img').forEach(img => {
      img.style.width = '45%'; // Adjust image size for smaller screens
    });
  } else if (window.innerWidth <= 480) {
    // For screens less than or equal to 480px wide (very small screens)
    imageRow.querySelectorAll('img').forEach(img => {
      img.style.width = '100%'; // Stack images full-width on small screens
    });
  } else {
    // Reset layout for larger screens
    aboutSection.style.flexDirection = 'row';
    aboutSection.style.textAlign = 'left';
    aboutText.style.flex = '70%';
    aboutImage.style.flex = '30%';
    imageRow.style.flexDirection = 'row'; // Keep images in a row
    imageRow.querySelectorAll('img').forEach(img => {
      img.style.width = '22%'; // Set image width for larger screens
    });
  }
}

// Initial layout update based on the current window size
updateLayout();

// Event listener for resizing the window
window.addEventListener('resize', updateLayout);

// Get reference to the back button and add hover effects
const backButton = document.querySelector('.back-button');

if (backButton) {
  // On mouse enter, change background color and scale the button
  backButton.addEventListener('mouseenter', () => {
    backButton.style.backgroundColor = '#ffcc99';
    backButton.style.transform = 'scale(1.05)';
  });

  // On mouse leave, revert changes
  backButton.addEventListener('mouseleave', () => {
    backButton.style.backgroundColor = '#4b3621';
    backButton.style.transform = 'scale(1)';
  });
}



