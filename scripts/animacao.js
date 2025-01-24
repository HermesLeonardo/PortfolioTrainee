export function animation() {
  // Animação de entrada dos títulos das seções
  const sectionHeading = document.querySelectorAll('section .heading');
  if (sectionHeading.length > 0) {
    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const heading = entry.target;
          if (entry.isIntersecting) {
            heading.style.animation = 'sec-heading-entry 1s ease forwards';
          } else {
            heading.style.animation = 'none';
          }
        });
      },
      {
        rootMargin: '-50px',
      }
    );
    sectionHeading.forEach((heading) => {
      headingObserver.observe(heading);
    });
  } else {
    console.warn("Nenhum elemento encontrado para 'section .heading'.");
  }

  // Animação de entrada do "more-about-me"
  const moreAboutMe = document.querySelector('.more-about-me');
  if (moreAboutMe) {
    const aboutMeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          moreAboutMe.style.animation = 'profile-about-entry 1.6s ease forwards';
        } else {
          moreAboutMe.style.animation = 'none';
        }
      });
    });
    aboutMeObserver.observe(moreAboutMe);
  } else {
    console.warn("Elemento '.more-about-me' não encontrado.");
  }

  // Animação de entrada de "years-of-doing"
  const yearsOfDoing = document.querySelector('.years-of-doing');
  if (yearsOfDoing) {
    const yearsDoingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            yearsOfDoing.style.animation = 'years-doing-entry 1.8s ease forwards';
          } else {
            yearsOfDoing.style.animation = 'none';
          }
        });
      },
      {
        rootMargin: '-50px',
      }
    );
    yearsDoingObserver.observe(yearsOfDoing);
  } else {
    console.warn("Elemento '.years-of-doing' não encontrado.");
  }

  // Animação dos botões de habilidade
  const skillBtns = document.querySelectorAll('#skills-section button');
  if (skillBtns.length > 0) {
    const skillBtnsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const button = entry.target;
        if (entry.isIntersecting) {
          button.style.animation = 'skill-button-entry 1s ease forwards';
        } else {
          button.style.animation = 'none';
        }
      });
    });
    skillBtns.forEach((button) => {
      skillBtnsObserver.observe(button);
    });
  } else {
    console.warn("Nenhum botão encontrado no '#skills-section'.");
  }

  // Animação das habilidades
  const skills = document.querySelectorAll('.skills-container .skill');
  if (skills.length > 0) {
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const skill = entry.target;
          if (entry.isIntersecting) {
            skill.style.animation = 'cards-entry 1s ease forwards';
          } else {
            skill.style.animation = 'none';
          }
        });
      },
      {
        rootMargin: '-70px',
      }
    );
    skills.forEach((skill) => {
      skillsObserver.observe(skill);
    });
  } else {
    console.warn("Nenhuma habilidade encontrada em '.skills-container .skill'.");
  }

  // Animação dos projetos
  const projects = document.querySelectorAll('#projects-section .project-card');
  if (projects.length > 0) {
    const projectCardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const projectCard = entry.target;
          if (entry.isIntersecting) {
            projectCard.style.animation = 'cards-entry 1s ease forwards';
          } else {
            projectCard.style.animation = 'none';
          }
        });
      },
      {
        rootMargin: '-70px',
      }
    );
    projects.forEach((project) => {
      projectCardObserver.observe(project);
    });
  } else {
    console.warn("Nenhum projeto encontrado em '#projects-section .project-card'.");
  }

  // Animação dos inputs de contato
  const contactInputs = document.querySelectorAll('#contact-section .input');
  if (contactInputs.length > 0) {
    const inputObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const input = entry.target;
          if (entry.isIntersecting) {
            input.style.animation = 'contact-input-entry 1s ease forwards';
          } else {
            input.style.animation = 'none';
          }
        });
      },
      {
        rootMargin: '-100px',
      }
    );
    contactInputs.forEach((input) => {
      inputObserver.observe(input);
    });
  } else {
    console.warn("Nenhum input encontrado em '#contact-section .input'.");
  }

  // Animação de entrada da seção de gráficos
  const knowledgeChartsSection = document.querySelector('.knowledge-charts');
  if (knowledgeChartsSection) {
    const chartsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const chart = entry.target;
          if (entry.isIntersecting) {
            chart.style.animation = 'charts-entry 1s ease forwards';
          } else {
            chart.style.animation = 'charts-exit 1s ease forwards';
          }
        });
      },
      {
        rootMargin: '-50px', // Ajusta o ponto de ativação da animação
      }
    );
    chartsObserver.observe(knowledgeChartsSection);
  } else {
    console.warn("Nenhuma seção de gráficos encontrada.");
  }

  // Animação de entrada de cada gráfico individual
  const chartContainers = document.querySelectorAll('.chart-container');
  if (chartContainers.length > 0) {
    const chartItemObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const chartContainer = entry.target;
        if (entry.isIntersecting) {
          chartContainer.style.animation = 'chart-item-entry 1s ease forwards';
        } else {
          chartContainer.style.animation = 'chart-item-exit 1s ease forwards';
        }
      });
    });
    chartContainers.forEach((chartContainer) => {
      chartItemObserver.observe(chartContainer);
    });
  } else {
    console.warn("Nenhum gráfico encontrado dentro de '.knowledge-charts'.");
  }
}

  // Seleciona todos os links com âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Previne o comportamento padrão do link

      const targetId = this.getAttribute('href'); // Pega o ID da seção
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Faz o scroll suave até a seção
        targetElement.scrollIntoView({
          behavior: 'smooth', // Suavidade
          block: 'start', // Alinha a seção no início
        });
      }
    });
  });



  