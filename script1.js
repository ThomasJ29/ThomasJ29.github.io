    // Animation de l'indicateur au clic
    const menuLinks = document.querySelectorAll('.menu-link');
    const indicator = document.querySelector('.indicator');
    const menuList = document.querySelector('.menu-list');

    function moveIndicator(link) {
      const li = link.parentElement;
      const lis = Array.from(menuList.children).filter(el => el.tagName === 'LI');
      const index = lis.indexOf(li);
      const liWidth = li.offsetWidth;
      indicator.style.width = liWidth + 'px';
      indicator.style.transform = `translateX(${li.offsetLeft}px)`;
    }

    // Initial position
    window.addEventListener('DOMContentLoaded', () => {
      const activeLink = document.querySelector('.menu-link.active');
      if (activeLink) moveIndicator(activeLink);
    });

    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        menuLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        moveIndicator(this);
      });
    });

    // Ajuste l'indicateur au redimensionnement
    window.addEventListener('resize', () => {
      const activeLink = document.querySelector('.menu-link.active');
      if (activeLink) moveIndicator(activeLink);
    });