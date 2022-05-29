$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  mergefit: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

var ball = document.querySelector(".mode-ball");
var items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.sidebar-icon,.mode"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
    item.classList.to;
  });
  ball.classList.toggle("active");
});
