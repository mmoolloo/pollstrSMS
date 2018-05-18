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
  var numberOfPhones = cleanPhones.split("\n").length;

  var surveyContainer = document.getElementById('this-survey'),
    genderContainer = document.getElementById('genders'),
    ageLowerContainer = document.getElementById('age-lower'),
    ageUpperContainer = document.getElementById('age-upper'),
    nseContainer = document.getElementById('nses'),
    numberContainer = document.getElementById('phone-numbers');

  var gender1 = document.getElementById('gender1'),
    gender2 = document.getElementById('gender2'),
    nse1 = document.getElementById('nse1'),
    nse2 = document.getElementById('nse2'),
    nse3 = document.getElementById('nse3'),
    nse4 = document.getElementById('nse4');

  surveyContainer.innerHTML = "";
  genderContainer.innerHTML = "";
  ageLowerContainer.innerHTML = "";
  ageUpperContainer.innerHTML = "";
  nseContainer.innerHTML = "";
  numberContainer.innerHTML = "";

  surveyContainer.appendChild(document.createTextNode(document.getElementById('available-surveys').value));
  if (gender1.checked == true){
    if (gender2.checked == true){
      genderContainer.appendChild(document.createTextNode('mujeres y hombres'));
    }
    else {
      genderContainer.appendChild(document.createTextNode('mujeres'));
    };
  }
  else{
    if (gender2.checked == true){
      genderContainer.appendChild(document.createTextNode('hombres'));
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
  }
  else if (nse1.checked == false && nse2.checked == false && nse3.checked == true && nse4.checked == false) {
    nseContainer.appendChild(document.createTextNode('B+ a B-'));
  }
  else if (nse1.checked == false && nse2.checked == false && nse3.checked == true && nse4.checked == true) {
    nseContainer.appendChild(document.createTextNode('B+ a C-'));
  }
  else if (nse1.checked == false && nse2.checked == true && nse3.checked == false && nse4.checked == false) {
    nseContainer.appendChild(document.createTextNode('A y A-'));
  }
  else if (nse1.checked == false && nse2.checked == true && nse3.checked == false && nse4.checked == true) {
    nseContainer.appendChild(document.createTextNode('A, A-, C+, C y C-'));
  }
  else if (nse1.checked == false && nse2.checked == true && nse3.checked == true && nse4.checked == false) {
    nseContainer.appendChild(document.createTextNode('A a B-'));
  }
  else if (nse1.checked == false && nse2.checked == true && nse3.checked == true && nse4.checked == true) {
    nseContainer.appendChild(document.createTextNode('A a C-'));
  }
  else if (nse1.checked == true && nse2.checked == false && nse3.checked == false && nse4.checked == false) {
    nseContainer.appendChild(document.createTextNode('A++ y A+'));
  }
  else if (nse1.checked == true && nse2.checked == false && nse3.checked == false && nse4.checked == true) {
    nseContainer.appendChild(document.createTextNode('A++, A+, C+, C y C-'));
  }
  else if (nse1.checked == true && nse2.checked == false && nse3.checked == true && nse4.checked == false) {
    nseContainer.appendChild(document.createTextNode('A++, A+, B+, B y B-'));
  }
  else if (nse1.checked == true && nse2.checked == false && nse3.checked == true && nse4.checked == true) {
    nseContainer.appendChild(document.createTextNode('A++, A+, B+, B, B-, C+, C y C-'));
  }
  else if (nse1.checked == true && nse2.checked == true && nse3.checked == false && nse4.checked == false) {
    nseContainer.appendChild(document.createTextNode('A++ a A-'));
  }
  else if (nse1.checked == true && nse2.checked == true && nse3.checked == false && nse4.checked == true) {
    nseContainer.appendChild(document.createTextNode('A++, A+, A, A-, C+, C y C-'));
  }
  else if (nse1.checked == true && nse2.checked == true && nse3.checked == true && nse4.checked == false) {
    nseContainer.appendChild(document.createTextNode('A++ a B-'));
  }
  else {
    nseContainer.appendChild(document.createTextNode('A++ a C-'));
  };



  numberContainer.appendChild(document.createTextNode(numberOfPhones - 1));
}
