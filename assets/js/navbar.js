const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCloseIcon = 'X';
const navbarHamburgerIcon = '<span class="navbar-toggler-icon"></span>';

navbarToggler.addEventListener('click', function() {
  if (!navbarToggler.classList.contains('collapsed')) {
    navbarToggler.innerHTML = navbarCloseIcon;
  } else {
    navbarToggler.innerHTML = navbarHamburgerIcon;
  }
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
    if (!navbarToggler.classList.contains('collapsed')) {
      navbarToggler.innerHTML = navbarHamburgerIcon;
      navbarToggler.click();
    }
  });
});
