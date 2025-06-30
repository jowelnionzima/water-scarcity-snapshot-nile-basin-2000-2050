const ctx = document.getElementById('waterScarcityChart').getContext('2d');
const waterScarcityChart = new Chart(ctx, {
  type: 'line', // Use with fill for area effect
  data: {
    labels: ['2000', '2010', '2020', '2030', '2040', '2050'],
    datasets: [
      {
        label: 'Uganda Available Water (billion m³)',
        data: [30, 28, 26, 24, 22, 20], // Estimated for Nile Basin share
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: true,
        stack: 'Water',
      },
      {
        label: 'Ethiopia Available Water (billion m³)',
        data: [70, 65, 60, 55, 50, 45], // Larger share due to Blue Nile
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: true,
        stack: 'Water',
      },
      {
        label: 'Egypt Available Water (billion m³)',
        data: [100, 97, 94, 90, 87, 85], // High reliance on Nile flow
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        borderColor: 'rgba(255, 206, 86, 1)',
        fill: true,
        stack: 'Water',
      },
      {
        label: 'Agricultural Demand (billion m³)',
        data: [120, 130, 140, 150, 160, 170],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: true,
        stack: 'Demand',
      },
      {
        label: 'Domestic/Industrial Demand (billion m³)',
        data: [40, 45, 50, 55, 60, 65],
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        borderColor: 'rgba(255, 159, 64, 1)',
        fill: true,
        stack: 'Demand',
      },
      {
        label: 'Total Population (millions)',
        data: [300, 400, 500, 600, 700, 800],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        yAxisID: 'y1',
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Water Volume (billion m³)' },
        stacked: true,
      },
      y1: {
        type: 'linear',
        position: 'right',
        title: { display: true, text: 'Population (millions)' },
        grid: { drawOnChartArea: false },
      },
    },
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label.includes('Uganda') && context.label >= '2020') {
              return label + ': ' + context.raw + ' billion m³ (Kinyara affected)';
            }
            return label + ': ' + context.raw + (label.includes('Population') ? ' million' : ' billion m³');
          }
        }
      },
    },
  },
});