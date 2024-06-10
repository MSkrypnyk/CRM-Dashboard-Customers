document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll(".customers__table-title");
  rows.forEach((row, index) => {
    const delay = index * 100;
    setTimeout(() => {
      row.classList.add("animate-row");
    }, delay);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("search-form");
  searchForm.classList.add("customers__search");
});

document.addEventListener("DOMContentLoaded", function () {
  const welcomeTitle = document.querySelector(".main__welcome");
  welcomeTitle.classList.add("main__welcome");
});