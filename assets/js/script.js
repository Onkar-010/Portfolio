"use strict";

// element Toggle Function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// SideBar variables
const SideBar = document.querySelector("[data-sidebar]");
const SideBarBtn = document.querySelector("[data-sidebar-btn]");

// Implement modle toggle
SideBarBtn.addEventListener("click", function () {
  elementToggleFunc(SideBar);
});

// Implementing Page Navigation

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

window.onload = function () {
  const loadingBar = document.querySelector(".loading-bar");
  loadingBar.style.animation =
    "hideBar 2s ease-in-out forwards"; /* Animation name and duration */

  setTimeout(function () {
    loadingBar.style.display = "none"; /* Hide after animation */
  }, 2000); /* Delay of 2 seconds */
};
