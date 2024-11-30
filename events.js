document.addEventListener("DOMContentLoaded", function() {
    // Add an event listener for each upcoming event to toggle visibility of the description
    const upcomingEvents = document.querySelectorAll('.upcoming-event');
  
    upcomingEvents.forEach(event => {
      const eventHeader = event.querySelector('h3');
      const eventDescription = event.querySelector('.event-info p');
      
      // Initially hide the descriptions
      eventDescription.style.display = 'none';
      
      // Toggle description visibility when the event header is clicked
      eventHeader.addEventListener('click', () => {
        if (eventDescription.style.display === 'none') {
          eventDescription.style.display = 'block';
        } else {
          eventDescription.style.display = 'none';
        }
      });
    });
  
    // Example of adding a countdown timer for the "Happening Right Now" event
    const eventEndDate = new Date("2024-12-31T23:59:59");  // Set to your event's end date
    const countdownDisplay = document.querySelector('.event-now-text p strong');
    
    function updateCountdown() {
      const now = new Date();
      const timeLeft = eventEndDate - now;
      
      if (timeLeft <= 0) {
        countdownDisplay.textContent = "The event has ended!";
        clearInterval(countdownInterval);  // Stop the countdown when the event ends
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        countdownDisplay.textContent = `Ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }
  
    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
  
    // Run the countdown once immediately on page load
    updateCountdown();
  });
  