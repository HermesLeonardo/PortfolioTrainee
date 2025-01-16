// Dados dos gráficos
const frontendData = {
  labels: ['Conhecimento', 'Faltando'],
  datasets: [
    {
      data: [40, 60], 
      backgroundColor: ['#4CAF50', '#ddd'],
    },
  ],
};

const backendData = {
  labels: ['Conhecimento', 'Faltando'],
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ['#2196F3', '#ddd'],
    },
  ],
};

const databaseData = {
  labels: ['Conhecimento', 'Faltando'],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ['#FF5722', '#ddd'],
    },
  ],
};

// Função para inicializar os gráficos
function initCharts() {
  if (document.getElementById('frontendChart')) {
    new Chart(document.getElementById('frontendChart'), {
      type: 'doughnut',
      data: frontendData,
    });
  }

  if (document.getElementById('backendChart')) {
    new Chart(document.getElementById('backendChart'), {
      type: 'doughnut',
      data: backendData,
    });
  }

  if (document.getElementById('databaseChart')) {
    new Chart(document.getElementById('databaseChart'), {
      type: 'doughnut',
      data: databaseData,
    });
  }
}

function observeCharts() {
  const chartsSection = document.querySelector('.knowledge-charts');

  // Verifica se a seção está visível
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        initCharts();
        observer.disconnect(); 
      }
    });
  }, { threshold: 0.5 }); 

  if (chartsSection) {
    observer.observe(chartsSection);
  }
}

document.addEventListener('DOMContentLoaded', observeCharts);
