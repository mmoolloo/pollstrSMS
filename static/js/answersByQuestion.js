var ctx = document.getElementById("barChart").getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Pregunta 1","Pregunta 2","Pregunta 3","Pregunta 4"],
        datasets: [{
            label: 'Número de respuestas',
            data: [360, 240, 206, 102],
            backgroundColor: pollstrChartColors(nonOverlappingOpacity),
            borderColor: pollstrChartColors(1),
            hoverColor: pollstrChartColors(1),
            borderWidth: 1
        }]
    },
    options: {
        legend: {
          display: false
        },
        maintainAspectRatio: true,
        scales: {
          xAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }],
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
