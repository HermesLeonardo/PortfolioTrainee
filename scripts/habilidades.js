export function skillFunctionality() {
  const skills = [
    // Skills Frontend
    {
      icon: 'images/icons/html.png',
      name: 'HTML',
      type: 'frontend'
    },
    {
      icon: 'images/icons/CSS.png',
      name: 'CSS',
      type: 'frontend'
    },
    {
      icon: 'images/icons/js (1).png',
      name: 'JAVASCRIPT',
      type: 'frontend'
    },
    {
      icon: 'images/icons/React (2).png',
      name: 'REACT',
      type: 'frontend'
    },
    {
      icon: 'images/icons/flutter-icon.png',
      name: 'FLUTTER',
      type: 'frontend'
    },
    {
      icon: 'images/icons/PRIMEFACES.png',
      name: 'PRIMEFACES',
      type: 'frontend'
    },

    // Skills Backend
    {
      icon: 'images/icons/dart-icon.png',
      name: 'DART',
      type: 'backend'
    },
    {
      icon: 'images/icons/java.png',
      name: 'JAVA',
      type: 'backend'
    },
    {
      icon: 'images/icons/spring.png',
      name: 'SPRING BOOT',
      type: 'backend'
    },
    {
      icon: 'images/icons/python.png',
      name: 'PYTHON',
      type: 'backend'
    },
    {
      icon: 'images/icons/sql-file.png',
      name: 'SQL LANGUAGE',
      type: 'backend'
    },

    // Skills Database
    {
      icon: 'images/icons/mysql.png',
      name: 'MYSQL',
      type: 'database'
    },
    {
      icon: 'images/icons/sqllite.png',
      name: 'SQLITE',
      type: 'database'
    },
    {
      icon: 'images/icons/firebase.png',
      name: 'FIREBASE',
      type: 'database'
    },
  ];

  let frontendHTML = '';
  let backendHTML = '';
  let databaseHTML = '';

  skills.forEach(skill => {
    const skillType = skill.type;

    if (skillType === 'frontend') {
      frontendHTML += `  
          <div class="frontend skill">
            <img class="icon" src="${skill.icon}" alt="skill-icon">
            <p>${skill.name}</p>
          </div>
        `;
    }
    if (skillType === 'backend') {
      backendHTML += `
        <div class="backend skill">
          <img class="icon" src="${skill.icon}" alt="skill-icon">
          <p>${skill.name}</p>
        </div>
      `;
    }
    if (skillType === 'database') {
      databaseHTML += `
        <div class="database skill">
          <img class="icon" src="${skill.icon}" alt="skill-icon">
          <p>${skill.name}</p>
        </div>
      `;
    }
  });

  document.querySelector('.skills-container.frontend-skills').innerHTML = frontendHTML;
  document.querySelector('.skills-container.backend-skills').innerHTML = backendHTML;
  document.querySelector('.skills-container.database-skills').innerHTML = databaseHTML;

  // Função para os botões
  const frontendBtn = document.querySelector('.frontend-btn');
  const backendBtn = document.querySelector('.backend-btn');
  const databaseBtn = document.querySelector('.database-btn');

  const frontendSkills = document.querySelector('.frontend-skills');
  const backendSkills = document.querySelector('.backend-skills');
  const databaseSkills = document.querySelector('.database-skills');

  // Exibição da categoria Frontend
  frontendBtn.addEventListener('click', () => {
    frontendBtn.classList.add('selected');
    backendBtn.classList.remove('selected');
    databaseBtn.classList.remove('selected');

    frontendSkills.style.display = 'grid';
    backendSkills.style.display = 'none';
    databaseSkills.style.display = 'none';
  });

  // Exibição da categoria Backend
  backendBtn.addEventListener('click', () => {
    frontendBtn.classList.remove('selected');
    backendBtn.classList.add('selected');
    databaseBtn.classList.remove('selected');

    frontendSkills.style.display = 'none';
    backendSkills.style.display = 'grid';
    databaseSkills.style.display = 'none';
  });

  // Exibição da categoria Database
  databaseBtn.addEventListener('click', () => {
    backendBtn.classList.remove('selected');
    frontendBtn.classList.remove('selected');
    databaseBtn.classList.add('selected');

    frontendSkills.style.display = 'none';
    backendSkills.style.display = 'none';
    databaseSkills.style.display = 'grid';
  });
}
