const homeLink = document.getElementById('home-link');
const profileCard = document.getElementById('profile-card');

// Alternar entre expandir e retrair o card
homeLink.addEventListener('click', function (event) {
    event.preventDefault();

    if (profileCard.classList.contains('expanded')) {
        profileCard.classList.remove('expanded');
        profileCard.classList.add('retracting');
    } else {
        profileCard.classList.remove('retracting');
        profileCard.classList.add('expanded');
    }

    // Atualizar as larguras no estilo do documento, se necessário
    document.documentElement.style.setProperty('--expanded-width', '80%');
    document.documentElement.style.setProperty('--expanded-width-mobile', '95%');
    document.documentElement.style.setProperty('--retract-width', '50rem');
});

// Fechar o card ao clicar fora dele
document.addEventListener('click', function (event) {
    if (!profileCard.contains(event.target) && !homeLink.contains(event.target)) {
        profileCard.classList.remove('expanded');
        profileCard.classList.add('retracting');
    }
});
