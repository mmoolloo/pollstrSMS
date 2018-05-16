
var chartType = 'line';
var lineOptions = {
  maintainAspectRatio: true,
  legend: {
    position: 'right'
  },
  scales: {
    xAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Month'
      }
    }],
    yAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Value'
      }
    }]
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
};

var febLabels = [],
  marLabels = [],
  aprLabels = [],
  febDataS = [],
  febDataR = [],
  febDataRD = [],
  marDataS = [],
  marDataR = [],
  marDataRD = [],
  aprDataS = [],
  aprDataR = [],
  aprDataRD = [],
  febTotal = [],
  marTotal = [],
  aprTotal = [];

for (var i = 1; i <= 28; i++) {
    febLabels.push(i + ' Feb');
}

for (var i = 1; i <= 31; i++) {
    marLabels.push(i + ' Mar');
}

for (var i = 1; i <= 30; i++) {
    aprLabels.push(i + ' Abr');
}



for (var i = 1; i <= 28; i++) {
    febDataS.push(Math.floor(Math.random() * 1000));
}

for (var i = 1; i <= 28; i++) {
    febDataRD.push(Math.floor(Math.random() * 220));
}

febDataS.sort(function(a, b){return a - b});
febDataRD.sort(function(a, b){return a - b});

for(var i = 0; i <= febDataRD.length - 1; i++) {
  febDataR.push(febDataS[i] - febDataRD[i]);
}

for(var i = 0; i <= febDataS.length - 1; i++) {
  febTotal.push(febDataS[i] + febDataR[i]);
}



for (var i = 1; i <= 31; i++) {
    marDataS.push(Math.floor(Math.random() * 1000));
}

for (var i = 1; i <= 31; i++) {
    marDataRD.push(Math.floor(Math.random() * 220));
}

marDataS.sort(function(a, b){return a - b});
marDataRD.sort(function(a, b){return a - b});

for(var i = 0; i <= marDataRD.length - 1; i++) {
  marDataR.push(marDataS[i] - marDataRD[i]);
}

for(var i = 0; i <= marDataS.length - 1; i++) {
  marTotal.push(marDataS[i] + marDataR[i]);
}


for (var i = 1; i <= 30; i++) {
    aprDataS.push(Math.floor(Math.random() * 1000));
}

for (var i = 1; i <= 30; i++) {
    aprDataRD.push(Math.floor(Math.random() * 220));
}

aprDataS.sort(function(a, b){return a - b});
aprDataRD.sort(function(a, b){return a - b});

for(var i = 0; i <= aprDataRD.length - 1; i++) {
  aprDataR.push(aprDataS[i] - aprDataRD[i]);
}

for(var i = 0; i <= aprDataS.length - 1; i++) {
  aprTotal.push(aprDataS[i] + aprDataR[i]);
}

var costPerLine = 10

function bStats(month){
  var statsCont = document.createElement('div');
  statsCont.classList.add('row','container');
  var bigCont = document.getElementById('billing-data');
  bigCont.appendChild(statsCont);

  var interactions = document.createElement('p');
  interactions.classList.add('grey-text','text-darken-2','right-align','flow-text')
  var intNumCont = document.createElement('span');
  intNumCont.classList.add('b-orange-text');
  statsCont.appendChild(interactions);
  var intTxt = document.createTextNode('Número de interacciones: ')
  interactions.appendChild(intTxt);
  interactions.appendChild(intNumCont);
  if(month == 'Febrero'){
    var intNum = document.createTextNode(febTotal[febTotal.length - 1]);
    var tCosNum = document.createTextNode('$' + Math.round(febTotal[febTotal.length - 1] * costPerLine * 116) / 100);
  }
  else if (month == 'Marzo') {
    var intNum = document.createTextNode(marTotal[marTotal.length - 1]);
    var tCosNum = document.createTextNode('$' + Math.round(marTotal[marTotal.length - 1] * costPerLine * 116) / 100);
  }
  else if (month == 'Abril') {
    var intNum = document.createTextNode(aprTotal[aprTotal.length - 1]);
    var tCosNum = document.createTextNode('$' + Math.round(aprTotal[aprTotal.length - 1] * costPerLine * 116) / 100);
  }
  intNumCont.appendChild(intNum);

  var cost = document.createElement('p');
  cost.classList.add('grey-text','text-darken-2','right-align','flow-text')
  var cosNumCont = document.createElement('span');
  cosNumCont.classList.add('b-orange-text');
  statsCont.appendChild(cost);
  var cosTxt = document.createTextNode('Costo por interacción: ')
  cost.appendChild(cosTxt);
  cost.appendChild(cosNumCont);
  var cosNum = document.createTextNode('$' + costPerLine + ' + I.V.A.');
  cosNumCont.appendChild(cosNum);

  var tCost = document.createElement('p');
  tCost.classList.add('grey-text','text-darken-2','right-align','flow-text')
  var tCosNumCont = document.createElement('span');
  tCosNumCont.classList.add('b-orange-text');
  statsCont.appendChild(tCost);
  var tCosTxt = document.createTextNode('Costo total del período: ')
  tCost.appendChild(tCosTxt);
  tCost.appendChild(tCosNumCont);
  tCosNumCont.appendChild(tCosNum);
}

function billingFebrero(){
  var ctx = document.getElementById("consumo").getContext('2d');
  var lineData = {
      labels: febLabels,
      datasets: [{
          label: 'Msjs. Enviados',
          data: febDataS,
          backgroundColor: pollstrChartColors(0)[1],
          borderColor: pollstrChartColors(1)[1],
          borderWidth: 1
      },
      {
          label: 'Respuestas',
          data: febDataR,
          backgroundColor: pollstrChartColors(0)[0],
          borderColor: pollstrChartColors(1)[0],
          borderWidth: 1
      },
      {
          label: 'Total',
          data: febTotal,
          backgroundColor: pollstrChartColors(overlappingOpacity)[4],
          borderColor: pollstrChartColors(1)[4],
          borderWidth: 1
      }]
  };
  var lineChart = new Chart(ctx, {
      type: chartType,
      data: lineData,
      options: lineOptions
  });
  bStats('Febrero');
}



function billingMarzo(){
  var ctx = document.getElementById("consumo").getContext('2d');
  var lineData = {
      labels: marLabels,
      datasets: [{
          label: 'Msjs. Enviados',
          data: marDataS,
          backgroundColor: pollstrChartColors(0)[1],
          borderColor: pollstrChartColors(1)[1],
          borderWidth: 1
      },
      {
          label: 'Respuestas',
          data: marDataR,
          backgroundColor: pollstrChartColors(0)[0],
          borderColor: pollstrChartColors(1)[0],
          borderWidth: 1
      },
      {
          label: 'Total',
          data: marTotal,
          backgroundColor: pollstrChartColors(overlappingOpacity)[4],
          borderColor: pollstrChartColors(1)[4],
          borderWidth: 1
      }]
  };
  var lineChart = new Chart(ctx, {
      type: chartType,
      data: lineData,
      options: lineOptions
  });
  bStats('Marzo');
}

function billingAbril(){
  var ctx = document.getElementById("consumo").getContext('2d');
  var lineData = {
      labels: aprLabels,
      datasets: [{
          label: 'Msjs. Enviados',
          data: aprDataS,
          backgroundColor: pollstrChartColors(0)[1],
          borderColor: pollstrChartColors(1)[1],
          borderWidth: 1
      },
      {
          label: 'Respuestas',
          data: aprDataR,
          backgroundColor: pollstrChartColors(0)[0],
          borderColor: pollstrChartColors(1)[0],
          borderWidth: 1
      },
      {
          label: 'Total',
          data: aprTotal,
          backgroundColor: pollstrChartColors(overlappingOpacity)[4],
          borderColor: pollstrChartColors(1)[4],
          borderWidth: 1
      }]
  };
  var lineChart = new Chart(ctx, {
      type: chartType,
      data: lineData,
      options: lineOptions
  });
  bStats('Abril');
}
