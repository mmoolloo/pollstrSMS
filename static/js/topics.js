var ctx = document.getElementById("topics").getContext('2d');
var barChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["trabajo, tarde, familia","prestaciones, enfermo, salario","tarde, depósito, dinero","asaltos, inseguridad, horario", "otros"],
        datasets: [{
            label: 'Keywords',
            data: [33, 28, 16, 12, 11],
            backgroundColor: pollstrChartColors(nonOverlappingOpacity),
            borderColor: pollstrChartColors(1),
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
