const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const html = document.documentElement;
const darkModeIcon = document.getElementById('darkModeIcon');

// Verifica se o modo escuro foi previamente ativado
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  html.classList.remove('light-mode');
  darkModeIcon.classList.remove('fa-moon');
  darkModeIcon.classList.add('fa-sun'); // Ícone de sol no modo escuro
} else {
  html.classList.add('light-mode');
  darkModeIcon.classList.remove('fa-sun');
  darkModeIcon.classList.add('fa-moon'); // Ícone de lua no modo claro
}

// Alterna o modo quando o botão é clicado
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  html.classList.toggle('light-mode'); 

  // Altera os ícones
  if (body.classList.contains('dark-mode')) {
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun'); // Ícone de sol no modo escuro
    localStorage.setItem('darkMode', 'enabled');
  } else {
    darkModeIcon.classList.remove('fa-sun');
    darkModeIcon.classList.add('fa-moon'); // Ícone de lua no modo claro
    localStorage.setItem('darkMode', 'disabled');
  }
});
