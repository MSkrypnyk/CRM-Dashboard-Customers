document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".customers__table-title").forEach((e, t) => {
    setTimeout(() => {
      e.classList.add("animate-row");
    }, 100 * t);
  });
}),
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("search-form").classList.add("customers__search");
  }),
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".main__welcome").classList.add("main__welcome");
  })
