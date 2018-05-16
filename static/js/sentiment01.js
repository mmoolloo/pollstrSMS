var ctx = document.getElementById("sentiment01").getContext('2d');
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
        },
        title: {
            display: true,
            text: 'Sentimiento'
        }
    }
});

var ctx1 = document.getElementById("sentiment02").getContext('2d');
var barChart = new Chart(ctx1, {
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
        },
        title: {
            display: true,
            text: 'Sentimiento'
        }
    }
});

var ctx2 = document.getElementById("sentiment03").getContext('2d');
var barChart = new Chart(ctx2, {
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
        },
        title: {
            display: true,
            text: 'Sentimiento'
        }
    }
});

var ctx3 = document.getElementById("sentiment04").getContext('2d');
var barChart = new Chart(ctx3, {
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
        },
        title: {
            display: true,
            text: 'Sentimiento'
        }
    }
});
