document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector(".dropdown-toggle");

    toggle.addEventListener("click", function (e) {
      if (window.innerWidth < 768) {
        e.preventDefault();
        dropdown.classList.toggle("open");
        dropdowns.forEach(d => {
          if (d !== dropdown) d.classList.remove("open");
        });
      }
    });
  });
});