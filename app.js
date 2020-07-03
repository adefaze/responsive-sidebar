const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  sideBar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("show-sidebar");
});
