// Sahil Shah portfolio — vanilla JS
// Replicates the React Navigation component's scroll behavior

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");

  // Toggle glass background on nav once the page is scrolled past 50px
  function handleScroll() {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", handleScroll);
  handleScroll();

});
