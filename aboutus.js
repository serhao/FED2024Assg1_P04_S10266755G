// JavaScript Features for Interactivity

// Add Hover Effect to Back Button
const backButton = document.querySelector('.back-button');
backButton.addEventListener('mouseenter', () => {
  backButton.style.transform = 'scale(1.05)';
});
backButton.addEventListener('mouseleave', () => {
  backButton.style.transform = 'scale(1)';
});

// Add Hover Effect to Images in the Image Row
const images = document.querySelectorAll('.image-row img');
images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.1)';
    image.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
  });
  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
    image.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  });
});
