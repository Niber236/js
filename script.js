document.querySelectorAll('a').forEach(link => {
    // Si le lien n'a pas la classe "commander", ouvrir dans un nouvel onglet
    if (!link.classList.contains('commander')) {
        link.addEventListener('click', function(event) {
            // Vérifie que le href est valide et différent de "#" ou vide
            if (this.href && this.getAttribute('href') !== '#' && this.getAttribute('href') !== '') {
                event.preventDefault();
                window.open(this.href, '_blank');
            }
        });
    }
    // Sinon, laisser le comportement normal (pour commander)
});