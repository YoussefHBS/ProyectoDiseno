document.addEventListener('DOMContentLoaded', function () {
    // Función para mostrar/ocultar el menú
    function toggleSidebar() {
      const navbarNav = document.querySelector('#navbarNav');
      if (navbarNav) {
        navbarNav.classList.toggle('show');
      }
    }
  
    // Asignar el evento al botón de menú
    const menuButton = document.querySelector('.menu-btn');
    if (menuButton) {
      menuButton.addEventListener('click', toggleSidebar);
    }
  });
  