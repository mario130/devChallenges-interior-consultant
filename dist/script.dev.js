"use strict";

var navBig = document.querySelector('.navLinks');
var burgers = document.querySelector('.burger');
var burgerLinks = document.querySelectorAll('.navLinks a');
burgers.addEventListener('click', function () {
  burgers.classList.toggle('toggled-btn');
  navBig.classList.toggle('nav-active');
  document.body.classList.toggle('hidden');
  burgerLinks.forEach(function (link, idx) {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = "navLinkFade 0.5s ease forwards ".concat(idx / 7 + 0.3, "s");
    }
  });
});