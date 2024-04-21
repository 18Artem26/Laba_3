const ctx = document.getElementById('myChart');
      
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Двигун', 'Поршнева', 'Головка циліндра', 'Карбюратор', 'Зірки', 'Поршень'],
            datasets: [{
              label: 'Порівняння цін',
              data: [5500, 2500, 2000, 850, 650, 510],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });