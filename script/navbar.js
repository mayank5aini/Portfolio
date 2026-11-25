const navbarContainer = document.getElementById("navbar-container");

const isNestedPage = window.location.pathname.includes("/html/");
const rootPath = isNestedPage ? "../" : "";

if (navbarContainer) {
  fetch(`${rootPath}component/navbar.html`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Navbar could not be loaded");
      }

      return response.text();
    })
    .then((data) => {
      navbarContainer.innerHTML = data;

      // Set logo path
      const logo = document.querySelector("[data-root-src]");

      if (logo) {
        logo.src = rootPath + logo.dataset.rootSrc;
      }

      // Set navbar links
      const navlinks = document.querySelectorAll(".navlink");

      const currentPage = isNestedPage
        ? "html/" + window.location.pathname.split("/").pop()
        : window.location.pathname.split("/").pop() || "index.html";

      navlinks.forEach((link) => {
        const targetPage = link.dataset.page;

        link.href = rootPath + targetPage;

        if (targetPage === currentPage) {
          link.classList.add("active");
        }
      });

      // Mobile menu
      const toggle = document.getElementById("menu-toggle");

      if (toggle) {
        toggle.addEventListener("change", () => {
          document.body.classList.toggle("no-screen", toggle.checked);
        });
      }
    })
    .catch((error) => {
      console.error("Navbar Error:", error);
    });
}
