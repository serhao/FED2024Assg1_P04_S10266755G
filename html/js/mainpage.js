const navLinks = document.querySelectorAll('nav ul li a');

// Function to add hover effect
function addHoverEffect(event) {
  event.target.style.backgroundColor = '#ff4500';
  event.target.style.color = 'white';
}

// Function to remove hover effect
function removeHoverEffect(event) {
  event.target.style.backgroundColor = '';
  event.target.style.color = 'white';
}

// Attach event listeners to each link
navLinks.forEach(link => {
  link.addEventListener('mouseenter', addHoverEffect);  
  link.addEventListener('mouseleave', removeHoverEffect);
});
