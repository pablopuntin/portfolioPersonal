document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const navbar = document.querySelector('.navbar');

    // Función unificada para setear el estado visual del tema
    const setTema = (isDark) => {
        if (isDark) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            navbar.classList.add('navbar-dark-mode');
            toggle.checked = true;
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            navbar.classList.remove('navbar-dark-mode');
            toggle.checked = false;
        }
    };

    // Comprobar persistencia previa en localStorage
    const isDarkStored = localStorage.getItem('dark-mode') === 'true';
    setTema(isDarkStored);

    // Escuchador de eventos del switch
    toggle.addEventListener('change', () => {
        const checkActive = toggle.checked;
        setTema(checkActive);
        localStorage.setItem('dark-mode', checkActive);
    });
});