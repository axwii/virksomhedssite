// Burger menu
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});


// Seperator styling
  // Function to update separator height
  function updateSeparatorHeight() {
    // Get the main element
    var mainElement = document.getElementById('main-content');

    // Get the computed height of the main element
    var mainHeight = window.getComputedStyle(mainElement).height;

    // Convert the height to a number and add 80px
    var separatorHeight = parseInt(mainHeight, 10) + 80;

    // Set the height of the separator with the added 80px
    document.getElementById('separator').style.height = separatorHeight + 'px';
  }

  // Update separator height on page load and window resize
  window.addEventListener('load', updateSeparatorHeight);
  window.addEventListener('resize', updateSeparatorHeight);

