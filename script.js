// Initializes the carousel when the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  var myCarousel = new bootstrap.Carousel(
    document.getElementById("peliculasCarousel"),
    {
      interval: 3000,
    }
  );
});
