"use strict";
const btn = document.getElementById("ham-btn");
const container = document.querySelector(".links-container");
const logo = document.getElementById("logo");



btn.addEventListener("click", function () {
  logo.classList.toggle("rotate");
  container.classList.toggle("hidden");
  container.style.transform = "translateX(0px)";
});
