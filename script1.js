    // L'indicator ne bouge que sur le lien actif (celui avec .active)
    function moveIndicatorToActive() {
      const menuLinks = document.querySelectorAll('.menu-link');
      const indicator = document.querySelector('.indicator');
      const activeLink = document.querySelector('.menu-link.active');
      if (!activeLink) return;
      const li = activeLink.parentElement;
      indicator.style.width = li.offsetWidth + 'px';
      indicator.style.transform = `translateX(${li.offsetLeft}px)`;
    }
    // Position initiale
    window.addEventListener('DOMContentLoaded', moveIndicatorToActive);
    // Ajuste l'indicator au redimensionnement
    window.addEventListener('resize', moveIndicatorToActive);
    // Pas de déplacement de l'indicator sur clic (il ne bouge qu'au rechargement/page courante);