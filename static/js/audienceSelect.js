function closeConfirm(){
  $('#confirm').modal('close');
};

function countPhones(){

  var phoneList = document.getElementById('phones').value;
  if (phoneList == ""){
    var cleanPhones = phoneList;
  }
  else if (phoneList.slice(-1) == "\n") {
    var cleanPhones = phoneList;
  }
  else {
    var cleanPhones = phoneList + "\n";
  };
  var numberOfPhones = cleanPhones.split("\n").length -1;

  if (numberOfPhones == 0){
    numberOfPhones = 30937;
  }

  var costPerMessage = 15

  var surveyContainer = document.getElementById('this-survey'),
    genderContainer = document.getElementById('genders'),
    ageLowerContainer = document.getElementById('age-lower'),
    ageUpperContainer = document.getElementById('age-upper'),
    nseContainer = document.getElementById('nses'),
    numberContainer = document.getElementById('phone-numbers'),
    numMessContainer = document.getElementById('number-of-messages'),
    unitCostContainer= document.getElementById('unit-cost'),
    totalCostContainer= document.getElementById('total-cost');

  var gender1 = document.getElementById('gender1'),
    gender2 = document.getElementById('gender2'),
    nse1 = document.getElementById('nse1'),
    nse2 = document.getElementById('nse2'),
    nse3 = document.getElementById('nse3'),
    nse4 = document.getElementById('nse4'),
    genderMultiplier = 1,
    nseMultiplier = 1,
    lowerAge = ageSlider.noUiSlider.get()[0],
    upperAge = ageSlider.noUiSlider.get()[1],
    ageMultiplier = (upperAge - lowerAge) * 0.02;

  surveyContainer.innerHTML = "";
  genderContainer.innerHTML = "";
  ageLowerContainer.innerHTML = "";
  ageUpperContainer.innerHTML = "";
  nseContainer.innerHTML = "";
  numberContainer.innerHTML = "";
  numMessContainer.innerHTML = "";
  unitCostContainer.innerHTML = "";
  totalCostContainer.innerHTML = "";

  surveyContainer.appendChild(document.createTextNode(document.getElementById('available-surveys').value));
  if (gender1.checked == true){
    if (gender2.checked == true){
      genderContainer.appendChild(document.createTextNode('mujeres y hombres'));
      var genderMultiplier = 1;
    }
    else {
      genderContainer.appendChild(document.createTextNode('mujeres'));
      var genderMultiplier = 0.5;
    };
  }
  else{
    if (gender2.checked == true){
      genderContainer.appendChild(document.createTextNode('hombres'));
      var genderMultiplier = 0.5;
    }
    else {
      $('#error-gender').modal('open');
    };
  };
  ageLowerContainer.appendChild(document.createTextNode(ageSlider.noUiSlider.get()[0]));
  ageUpperContainer.appendChild(document.createTextNode(ageSlider.noUiSlider.get()[1]));
  if (nse1.checked == false && nse2.checked == false && nse3.checked == false && nse4.checked == false) {
    $('#error-nse').modal('open');
  }
  else if (nse1.checked == false && nse2.checked == false && nse3.checked == false && nse4.checked == true) {
    nseContainer.appendChild(document.createTextNode('C+ a C-'));
    nseMultiplier = 0.1;
  }
  else if (nse1.checked == false && nse2.checked == false && nse3.checked == true && nse4.checked == false) {
    nseContainer.appendChild(document.createTextNode('B+ a B-'));
    nseMultiplier = 0.4;
  }
  else if (nse1.checked == false && nse2.checked == false && nse3.checked == true && nse4.checked == true) {
    nseContainer.appendChild(document.createTextNode('B+ a C-'));
    nseMultiplier = 0.5;
  }
  else if (nse1.checked == false && nse2.checked == true && nse3.checked == false && nse4.checked == false) {
    nseContainer.appendChild(document.createTextNode('A y A-'));
    nseMultiplier = 0.3;
  }
  else if (nse1.checked == false && nse2.checked == true && nse3.checked == false && nse4.checked == true) {
    nseContainer.appendChild(document.createTextNode('A, A-, C+, C y C-'));
    nseMultiplier = 0.4;
  }
  else if (nse1.checked == false && nse2.checked == true && nse3.checked == true && nse4.checked == false) {
    nseContainer.appendChild(document.createTextNode('A a B-'));
    nseMultiplier = 0.7;
  }
  else if (nse1.checked == false && nse2.checked == true && nse3.checked == true && nse4.checked == true) {
    nseContainer.appendChild(document.createTextNode('A a C-'));
    nseMultiplier = 0.8;
  }
  else if (nse1.checked == true && nse2.checked == false && nse3.checked == false && nse4.checked == false) {
    nseContainer.appendChild(document.createTextNode('A++ y A+'));
    nseMultiplier = 0.2;
  }
  else if (nse1.checked == true && nse2.checked == false && nse3.checked == false && nse4.checked == true) {
    nseContainer.appendChild(document.createTextNode('A++, A+, C+, C y C-'));
    nseMultiplier = 0.3;
  }
  else if (nse1.checked == true && nse2.checked == false && nse3.checked == true && nse4.checked == false) {
    nseContainer.appendChild(document.createTextNode('A++, A+, B+, B y B-'));
    nseMultiplier = 0.6;
  }
  else if (nse1.checked == true && nse2.checked == false && nse3.checked == true && nse4.checked == true) {
    nseContainer.appendChild(document.createTextNode('A++, A+, B+, B, B-, C+, C y C-'));
    nseMultiplier = 0.7;
  }
  else if (nse1.checked == true && nse2.checked == true && nse3.checked == false && nse4.checked == false) {
    nseContainer.appendChild(document.createTextNode('A++ a A-'));
    nseMultiplier = 0.5;
  }
  else if (nse1.checked == true && nse2.checked == true && nse3.checked == false && nse4.checked == true) {
    nseContainer.appendChild(document.createTextNode('A++, A+, A, A-, C+, C y C-'));
    nseMultiplier = 0.6;
  }
  else if (nse1.checked == true && nse2.checked == true && nse3.checked == true && nse4.checked == false) {
    nseContainer.appendChild(document.createTextNode('A++ a B-'));
    nseMultiplier = 0.9;
  }
  else {
    nseContainer.appendChild(document.createTextNode('A++ a C-'));
    nseMultiplier = 1;
  };

  console.log(ageMultiplier);

  var numberOfMessages =  Math.round(genderMultiplier * ageMultiplier * nseMultiplier * 400 * numberOfPhones - Math.round(Math.random() * 5));

  numberContainer.appendChild(document.createTextNode(numberOfPhones));
  numMessContainer.appendChild(document.createTextNode(numberOfMessages));
  unitCostContainer.appendChild(document.createTextNode(costPerMessage));
  totalCostContainer.appendChild(document.createTextNode(numberOfMessages*costPerMessage));

  var budget = document.getElementById('budget').value;

  if (budget > 0 && budget <= (numberOfMessages*costPerMessage)){
    numMessContainer.innerHTML = "";
    totalCostContainer.innerHTML = "";

    budget = budget - (budget % costPerMessage);
    numMessContainer.appendChild(document.createTextNode(budget / costPerMessage));
    totalCostContainer.innerHTML = budget;
  }

}
