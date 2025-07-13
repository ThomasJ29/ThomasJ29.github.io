<script>
    const list = document.querySelectorAll('.list');

function activeLink() {
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}

// Ajoute l'événement à chaque élément une seule fois
list.forEach((item) => item.addEventListener('click', activeLink));
    
</script>