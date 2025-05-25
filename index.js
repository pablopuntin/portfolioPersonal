
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const navbar = document.querySelector('.navbar');

  // Comprobar si el usuario ya eligió un modo antes
  if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    navbar.classList.add('navbar-dark-mode');
    toggle.checked = true;
  } else {
    body.classList.add('light-mode');
  }

  toggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    navbar.classList.toggle('navbar-dark-mode');

    // Guardar preferencia del usuario
    localStorage.setItem('dark-mode', toggle.checked);
  });

