// Add all your JS here
window.addEventListener("load", function() {
  const preloader = document.querySelector(".preloader");
  const content = document.querySelector(".content");

  setTimeout(function() {
    preloader.style.display = "none";
    content.style.display = "block";
  }, 2000); // Adjust the time as needed
});
