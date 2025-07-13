<script>
    const list = document.querySelectorAll('.list');
    function activeLink() {
       list.forEach((item) => item.classlist.remove('active'));
       this.classlist.add('active'); 
    }
    list.forEach((item) => item.addEventListener('click', activeLink))
</script>