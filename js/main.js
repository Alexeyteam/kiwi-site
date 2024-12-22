$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      440: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 2,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector(".nav_button");
  const menu = document.querySelector(".nav_list");
  const svg_open = document.querySelector(".svg_open");
  const svg_close = document.querySelector(".svg_close");

  burgerButton.addEventListener("click", () => {
    menu.classList.toggle("open");
    if (svg_open.classList.contains("hidden")) {
      svg_open.classList.remove("hidden");
      svg_close.classList.add("hidden");
    } else {
      svg_open.classList.add("hidden");
      svg_close.classList.remove("hidden");
    }
    console.log("click");
  });
});
