const aboutTabs = document.querySelectorAll(".tab");
const aboutContents = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
  if (aboutTabs.length > 0) {
    aboutTabs[0].click();
  }
});

aboutTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    aboutTabs.forEach((item) => {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    const sectionId = tab.dataset.section;

    aboutContents.forEach((content) => {
      content.classList.remove("active");
    });

    const activeContent = document.getElementById(sectionId);

    if (activeContent) {
      activeContent.classList.add("active");
    }
  });
});
