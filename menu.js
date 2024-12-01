document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    // Add mouseover effect
    item.addEventListener("mouseover", () => {
      item.style.transform = "scale(1.05)";
      item.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    });

    // Revert to original state on mouseout
    item.addEventListener("mouseout", () => {
      item.style.transform = "scale(1)";
      item.style.boxShadow = "none";
    });
  });
});

