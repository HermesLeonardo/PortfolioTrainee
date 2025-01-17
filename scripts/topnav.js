export function topNav() {
  const topNav = document.querySelector('nav.top-nav');
  
  // Define o padding superior para garantir que a navegação até uma seção 
  const topnavHeight = topNav.offsetHeight;
  document.documentElement.style.setProperty("--scroll-padding", `${topnavHeight + 30}px`);

  // Seleciona todas as seções e itens da navegação
  const sections = document.querySelectorAll('.section-container section');
  const navItems = document.querySelectorAll('nav.top-nav li');
  
  // Observador para monitorar a interseção das seções na viewport
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Para cada entrada visível, verifica a classe da seção e do ícone
          navItems.forEach(navItem => {
            const navClass = navItem.classList[1]; 
            const sectionClass = entry.target.classList[1];
            const navIcon = navItem.querySelector('.nav-icon'); 

            // Adiciona ou remove a classe 'active' com base na visibilidade da seção
            if (sectionClass === navClass) {
              navIcon.classList.add('active');
            } else {
              navIcon.classList.remove('active');
            }
          });
        }
      });
    },
    {
      rootMargin: '-100px' 
    }
  );

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}
