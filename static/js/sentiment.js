var ctx = document.getElementById("sentiment").getContext('2d');
var barChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["positivo","neutral","negativo"],
        datasets: [{
            label: 'Sentiment',
            data: [20, 30, 50],
            backgroundColor: pollstrPNNColors(nonOverlappingOpacity),
            borderColor: pollstrPNNColors(1),
            hoverColor: pollstrChartColors(1),
            borderWidth: 1
        }]
    },
    options: {
        legend: {
          position: 'right',
          boxWidth: 20
        }
    }
});
