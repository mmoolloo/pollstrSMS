
var chartType = 'line';
var lineOptions = {
  maintainAspectRatio: true,
  legend: {
    position: 'top'
  },
  scales: {
    xAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Fecha'
      }
    }],
    yAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Número de mensajes'
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
  febData1 = [],
  febData2 = [],
  marData1 = [],
  marData2 = [],
  aprData1 = [],
  aprData2 = [],
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
    febData1.push(Math.floor(Math.random() * 1000));
}
for (var i = 1; i <= 28; i++) {
    febData2.push(Math.floor(Math.random() * 800));
}
febData1.sort(function(a, b){return a - b});
febData2.sort(function(a, b){return a - b});

for(var i = 0; i <= febData1.length - 1; i++) {
  febTotal.push(febData1[i] + febData2[i]);
}

for (var i = 1; i <= 31; i++) {
    marData1.push(Math.floor(Math.random() * 1000));
}
for (var i = 1; i <= 31; i++) {
    marData2.push(Math.floor(Math.random() * 800));
}
marData1.sort(function(a, b){return a - b});
marData2.sort(function(a, b){return a - b});

for(var i = 0; i <= marData1.length - 1; i++) {
  marTotal.push(marData1[i] + marData2[i]);
}

for (var i = 1; i <= 30; i++) {
    aprData1.push(Math.floor(Math.random() * 1000));
}
for (var i = 1; i <= 30; i++) {
    aprData2.push(Math.floor(Math.random() * 800));
}
aprData1.sort(function(a, b){return a - b});
aprData2.sort(function(a, b){return a - b});

for(var i = 0; i <= aprData1.length - 1; i++) {
  aprTotal.push(aprData1[i] + aprData2[i]);
}


var costPerLine = 15

function bStats(month){
  var statsCont = document.createElement('div');
  statsCont.classList.add('row','container');
  var bigCont = document.getElementById('billing-data');
  bigCont.appendChild(statsCont);

  var interactions = document.createElement('p');
  interactions.classList.add('grey-text','text-darken-2','right-align','flow-text')
  var intNumCont = document.createElement('span');
  intNumCont.classList.add('tm-green-text');
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
  cosNumCont.classList.add('tm-green-text');
  statsCont.appendChild(cost);
  var cosTxt = document.createTextNode('Costo por interacción: ')
  cost.appendChild(cosTxt);
  cost.appendChild(cosNumCont);
  var cosNum = document.createTextNode('$' + costPerLine + ' + I.V.A.');
  cosNumCont.appendChild(cosNum);

  var tCost = document.createElement('p');
  tCost.classList.add('grey-text','text-darken-2','right-align','flow-text')
  var tCosNumCont = document.createElement('span');
  tCosNumCont.classList.add('tm-green-text');
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
          label: 'Ofertas de fin de temporada',
          data: febData1,
          backgroundColor: pollstrChartColors(0)[1],
          borderColor: pollstrChartColors(1)[1],
          borderWidth: 1
      },
      {
          label: 'Nuevo lanzamiento de producto',
          data: febData2,
          backgroundColor: pollstrChartColors(0)[2],
          borderColor: pollstrChartColors(1)[2],
          borderWidth: 1
      },
      {
          label: 'Total',
          data: febTotal,
          backgroundColor: pollstrChartColors(overlappingOpacity)[0],
          borderColor: pollstrChartColors(1)[0],
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
          label: 'Ofertas de fin de temporada',
          data: marData1,
          backgroundColor: pollstrChartColors(0)[1],
          borderColor: pollstrChartColors(1)[1],
          borderWidth: 1
      },
      {
          label: 'Nuevo lanzamiento de producto',
          data: marData2,
          backgroundColor: pollstrChartColors(0)[2],
          borderColor: pollstrChartColors(1)[2],
          borderWidth: 1
      },
      {
          label: 'Total',
          data: marTotal,
          backgroundColor: pollstrChartColors(overlappingOpacity)[0],
          borderColor: pollstrChartColors(1)[0],
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
          label: 'Ofertas de fin de temporada',
          data: aprData1,
          backgroundColor: pollstrChartColors(0)[1],
          borderColor: pollstrChartColors(1)[1],
          borderWidth: 1
      },
      {
          label: 'Nuevo lanzamiento de producto',
          data: aprData2,
          backgroundColor: pollstrChartColors(0)[2],
          borderColor: pollstrChartColors(1)[2],
          borderWidth: 1
      },
      {
          label: 'Total',
          data: aprTotal,
          backgroundColor: pollstrChartColors(overlappingOpacity)[0],
          borderColor: pollstrChartColors(1)[0],
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


function viewBilling(){
  document.getElementById("billing-data").innerHTML = "";
  var month = document.getElementById('months').value;
  var container = document.getElementById('billing-data');
  var title = document.createElement('h4');
  var titleText = document.createTextNode('Consumo para el mes de ' + month);
  var canvas = document.createElement('canvas');
  canvas.id = 'consumo';
  canvas.height = '140';
  container.classList.add('card-panel', 'center','canvas-graph');
  container.appendChild(title);
  title.appendChild(titleText);
  title.classList.add('tm-green-text');
  container.appendChild(canvas);
  if (month == 'Febrero'){
    billingFebrero();
  }
  else if (month == 'Marzo') {
    billingMarzo();
  }
  else if (month == 'Abril') {
    billingAbril();
  }
}
