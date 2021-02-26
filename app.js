const navSlider = () => {
  const burgerButton = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links li");

  burgerButton.addEventListener("click", () => {
    navLinks.classList.toggle("nav-links-active");
    burgerButton.classList.toggle("burger-active");
    navItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navItems 0.4s forwards ${index / 5 + 0.3}s`;
      }
    });
  });
};

navSlider();
