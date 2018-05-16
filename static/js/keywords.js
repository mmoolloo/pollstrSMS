var ctx = document.getElementById("keywords").getContext('2d');
var barChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Trabajo","Horario","Salario","Prestaciones","Vacaciones","Inseguridad"],
        datasets: [{
            label: 'Keywords',
            data: [90, 83, 65, 55, 30, 21],
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
              },
              scaleLabel: {
							display: true,
							labelString: 'Repeticiones'
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
