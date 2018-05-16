var ctx = document.getElementById("doughnutChart").getContext('2d');
var barChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["positive","neutral","negative"],
        datasets: [{
            label: 'Sentiment',
            data: [10, 8, 12],
            backgroundColor: pollstrPNNColors(nonOverlappingOpacity),
            borderColor: pollstrPNNColors(1),
            hoverColor: pollstrChartColors(1),
            borderWidth: 1
        }]
    },
    options: {
        legend: {
          position: 'left',
          boxWidth: 20
        }
    }
});
