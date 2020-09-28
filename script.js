let navBig = document.querySelector('.navLinks')
let burgers = document.querySelector('.burger')
let burgerLinks = document.querySelectorAll('.navLinks a')

burgers.addEventListener('click', () => {
  burgers.classList.toggle('toggled-btn')
  navBig.classList.toggle('nav-active')
  document.body.classList.toggle('hidden')

  burgerLinks.forEach((link, idx) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        idx / 7 + 0.3
      }s`;
    }
  });
})
