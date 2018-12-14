const name = document.getElementById('name');
const age = document.getElementById('age');
const HN = document.getElementById('HN');
const Ward = document.getElementById('Ward');
const OPD = document.getElementById('OPD');
const ER = document.getElementById('ER');
const wardInput = document.getElementsByName('wardInput');
const equipmentOther = document.getElementsByName('equipmentOther');
const transportOther = document.getElementsByName('transportOther');
const bringOther = document.getElementsByName('bringOther');
const genetics = document.getElementsByName('genetics');
const geneticsOther = document.getElementsByName('geneticsOther');
const anyMedication = document.getElementsByName('anyMedication');
const anyMedicationOther = document.getElementsByName('anyMedicationOther');
const medicalProblems = document.getElementsByName('medicalProblems');
const medicalProblemsOther = document.getElementsByName('medicalProblemsOther');
const surgicalHistory = document.getElementsByName('surgicalHistory');
const surgicalHistoryOther = document.getElementsByName('surgicalHistoryOther');
const medicationHistory = document.getElementsByName('medicationHistory');
const medicationHistoryOther = document.getElementsByName('medicationHistoryOther');

const numUrinate = document.getElementsByName('numUrinate');
const urinate = document.getElementsByName('urinate');
const urinateOther = document.getElementsByName('urinateOther');
const numExcrete = document.getElementsByName('numExcrete');
const excrete = document.getElementsByName('excrete');
const excreteOther = document.getElementsByName('excreteOther');
const excreteBelly = document.getElementsByName('excreteBelly');
const excreteBellyOther = document.getElementsByName('excreteBellyOther');

const cigarette = document.getElementsByName('cigarette');
const cigaretteOther = document.getElementsByName('cigaretteOther');
const alcohol = document.getElementsByName('alcohol');
const alcoholOther = document.getElementsByName('alcoholOther');

if (name != undefined) {
  name.addEventListener('keyup', autoName);
}
if (age != undefined) {
  age.addEventListener('keyup', autoAge);
}
if (HN != undefined) {
  HN.addEventListener('keyup', autoHN);
}
if (wardInput[0] != undefined) {
  wardInput[0].addEventListener('keyup', autoWard);
}

// Auto type lower Name, Age, HN, Ward 
function autoName(e) {
  const text = e.target.value;
  document.getElementsByName('name')[1].value = text;
}
function autoAge(e) {
  const text = e.target.value;
  document.getElementsByName('age')[1].value = text;
}
function autoHN(e) {
  const text = e.target.value;
  document.getElementsByName('HN')[1].value = text;
}
function autoWard(e) {
  const text = e.target.value;
  wardInput[1].value = text;
}

// Show/Hide wardInput if checked/unchecked
if (Ward.checked == true) {
  $('#wardInput').show();
} else {
  $('#wardInput').hide();
}
// Show wardInput when Ward checked
$('#Ward').change(function () {
  if (Ward.checked == true) {
    $('#wardInput').fadeIn();
  }
});


// Hide wardInput when OPD or ER selected & rest wardInput value
$('#OPD').change(function () {
  if (OPD.checked == true) {
    $('#wardInput').fadeOut();
    wardInput[0].value = "";
    wardInput[1].value = "";
  }
});
$('#ER').change(function () {
  if (ER.checked == true) {
    $('#wardInput').fadeOut();
    wardInput[0].value = "";
    wardInput[1].value = "";
  }
});

// Show equipmentOther when equip4 selected
if ($('#equip4').is(':checked')) {
  $('#equipmentOther').show();
} else {
  $('#equipmentOther').hide();
}
// Hide & Reset equipmentOther when equip4 is not selected 
$('#equip4').change(function () {
  if ($('#equip4').is(':checked')) {
    $('#equipmentOther').fadeIn();
  } else {
    $('#equipmentOther').fadeOut();
    equipmentOther[0].value = "";
  }
});

$('#transportOther').hide();
// Show transportOtherInput when transportOther selected
$('#transport').change(function () {
  var selected = $(this).val();
  if (selected == 'อื่นๆ') {
    $('#transportOther').fadeIn();
  }
  else {
    $('#transportOther').fadeOut();
    transportOther[0].value = "";
  }
});

// Show/Hide bringOther if checked/unchecked
if ($('#bring').is(':checked')) {
  $('#bringOther').show();
} else {
  $('#bringOther').hide();
}
// Show bringOther when bring is selected
$('#bring').change(function () {
  if ($('#bring').is(':checked')) {
    $('#bringOther').fadeIn();
  }
});
//  Hide and Reset value bringOther when dontBring is selected
$('#dontBring').change(function () {
  if ($('#dontBring').is(':checked')) {
    $('#bringOther').fadeOut();
    bringOther[0].value = "";
  }
});

// Show/Hide geneticsOther if checked/unchecked
if ($('#genetics').is(':checked')) {
  $('#geneticsOther').show();
} else {
  $('#geneticsOther').hide();
}
// Show geneticsOther when genetics is selected
$('#genetics').change(function () {
  if ($('#genetics').is(':checked')) {
    $('#geneticsOther').fadeIn();
  }
});
//  Hide and Reset value geneticsOther when geneticsNo is selected
$('#geneticsNo').change(function () {
  if ($('#geneticsNo').is(':checked')) {
    $('#geneticsOther').fadeOut();
    geneticsOther[0].value = "";
  }
});

// Show/Hide anyMedicationOther if checked/unchecked
if ($('#anyMedication').is(':checked')) {
  $('#anyMedicationOther').show();
} else {
  $('#anyMedicationOther').hide();
}
// Show anyMedicationOther when anyMedication is selected
$('#anyMedication').change(function () {
  if ($('#anyMedication').is(':checked')) {
    $('#anyMedicationOther').fadeIn();
  }
});
//  Hide and Reset value anyMedicationOther when anyMedicationNo is selected
$('#anyMedicationNo').change(function () {
  if ($('#anyMedicationNo').is(':checked')) {
    $('#anyMedicationOther').fadeOut();
    anyMedicationOther[0].value = "";
  }
});

// Show/Hide medicationHistoryOther if checked/unchecked
if ($('#medicationHistory').is(':checked')) {
  $('#medicationHistoryOther').show();
} else {
  $('#medicationHistoryOther').hide();
}
// Show medicationHistoryOther when medicationHistory is selected
$('#medicationHistory').change(function () {
  if ($('#medicationHistory').is(':checked')) {
    $('#medicationHistoryOther').fadeIn();
  }
});
//  Hide and Reset value medicationHistoryOther when medicationHistoryNo is selected
$('#medicationHistoryNo').change(function () {
  if ($('#medicationHistoryNo').is(':checked')) {
    $('#medicationHistoryOther').fadeOut();
    medicationHistoryOther[0].value = "";
  }
});

if ($('#medicationHistory').is(':checked')) {
  $('#medicationHistoryOther').show();
} else {
  $('#medicationHistoryOther').hide();
}

// Show/Hide medicalProblemsOther if checked/unchecked
if ($('#medicalProblems').is(':checked')) {
  $('#medicalProblemsOther').show();
} else {
  $('#medicalProblemsOther').hide();
}
// Show medicalProblemsOther when medicalProblems is selected
$('#medicalProblems').change(function () {
  if ($('#medicalProblems').is(':checked')) {
    $('#medicalProblemsOther').fadeIn();
  }
});
//  Hide and Reset value medicalProblemsOther when medicalProblemsNo is selected
$('#medicalProblemsNo').change(function () {
  if ($('#medicalProblemsNo').is(':checked')) {
    $('#medicalProblemsOther').fadeOut();
    medicationHistoryOther[0].value = "";
  }
});

if ($('#medicalProblems').is(':checked')) {
  $('#medicalProblemsOther').show();
} else {
  $('#medicalProblemsOther').hide();
}

// Show/Hide surgicalHistoryOther if checked/unchecked
if ($('#surgicalHistory').is(':checked')) {
  $('#surgicalHistoryOther').show();
} else {
  $('#surgicalHistoryOther').hide();
}
// Show surgicalHistoryOther when surgicalHistoryOther is selected
$('#surgicalHistory').change(function () {
  if ($('#surgicalHistory').is(':checked')) {
    $('#surgicalHistoryOther').fadeIn();
  }
});
//  Hide and Reset value surgicalHistoryOther when surgicalHistoryNo is selected
$('#surgicalHistoryNo').change(function () {
  if ($('#surgicalHistoryNo').is(':checked')) {
    $('#surgicalHistoryOther').fadeOut();
    surgicalHistoryOther[0].value = "";
  }
});

if ($('#surgicalHistory').is(':checked')) {
  $('#surgicalHistoryOther').show();
} else {
  $('#surgicalHistoryOther').hide();
}

// Show/Hide urinateOther if checked/unchecked
if ($('#urinateNo').is(':checked')) {
  $('#urinateOther').show();
} else {
  $('#urinateOther').hide();
}
// Show urinateOther when urinateNo is selected
$('#urinateNo').change(function () {
  if ($('#urinateNo').is(':checked')) {
    $('#urinateOther').fadeIn();
  }
});
//  Hide and Reset value urinateOther when urinate is selected
$('#urinate').change(function () {
  if ($('#urinate').is(':checked')) {
    $('#urinateOther').fadeOut();
    urinateOther[0].value = "";
  }
});

// Show/Hide excreteOther if checked/unchecked
if ($('#excreteNo').is(':checked')) {
  $('#excreteOther').show();
} else {
  $('#excreteOther').hide();
}
// Show excreteOther when excreteNo is selected
$('#excreteNo').change(function () {
  if ($('#excreteNo').is(':checked')) {
    $('#excreteOther').fadeIn();
  }
});
//  Hide and Reset value excreteOther when excrete is selected
$('#excrete').change(function () {
  if ($('#excrete').is(':checked')) {
    $('#excreteOther').fadeOut();
    excreteOther[0].value = "";
  }
});

// Show/Hide excreteBellyOther if checked/unchecked
if ($('#excreteBelly').is(':checked')) {
  $('#excreteBellyOther').show();
} else {
  $('#excreteBellyOther').hide();
}
// Show excreteBellyOther when excreteBelly is selected
$('#excreteBelly').change(function () {
  if ($('#excreteBelly').is(':checked')) {
    $('#excreteBellyOther').fadeIn();
  }
});
//  Hide and Reset value excreteBellyOther when excreteBellyNo is selected
$('#excreteBellyNo').change(function () {
  if ($('#excreteBellyNo').is(':checked')) {
    $('#excreteBellyOther').fadeOut();
    excreteBellyOther[0].value = "";
  }
});


// Show/Hide cigaretteOther if checked/unchecked
if ($('#cigarette').is(':checked')) {
  $('#cigaretteOther').show();
} else {
  $('#cigaretteOther').hide();
}
// Show cigaretteOther when cigarette is selected
$('#cigarette').change(function () {
  if ($('#cigarette').is(':checked')) {
    $('#cigaretteOther').fadeIn();
  }
});
//  Hide and Reset value cigaretteOther when cigaretteNo is selected
$('#cigaretteNo').change(function () {
  if ($('#cigaretteNo').is(':checked')) {
    $('#cigaretteOther').fadeOut();
    cigaretteOther[0].value = "";
  }
});

// Show/Hide alcoholOther if checked/unchecked
if ($('#alcohol').is(':checked')) {
  $('#alcoholOther').show();
} else {
  $('#alcoholOther').hide();
}
// Show alcoholOther when alcohol is selected
$('#alcohol').change(function () {
  if ($('#alcohol').is(':checked')) {
    $('#alcoholOther').fadeIn();
  }
});
//  Hide and Reset value alcoholOther when alcoholNo is selected
$('#alcoholNo').change(function () {
  if ($('#alcoholNo').is(':checked')) {
    $('#alcoholOther').fadeOut();
    alcoholOther[0].value = "";
  }
});



// Hide & reset Question3 inputs when cannotTell3 is selected
$('#cannotTell3').change(function () {
  if ($('#cannotTell3').is(':checked')) {
    $('#Question3').fadeOut();
    genetics[0].checked = false;
    genetics[1].checked = false;
    geneticsOther[0].value = "";
    anyMedication[0].checked = false;
    anyMedication[1].checked = false;
    anyMedicationOther[0].value = "";
    medicalProblems[0].checked = false;
    medicalProblems[1].checked = false;
    medicalProblemsOther[0].value = "";
    surgicalHistory[0].checked = false;
    surgicalHistory[1].checked = false;
    surgicalHistoryOther[0].value = "";
    medicationHistory[0].checked = false;
    medicationHistory[1].checked = false;
    medicationHistoryOther[0].value = "";

    $('#geneticsOther').hide();
    $('#anyMedicationOther').hide();
    $('#medicationHistoryOther').hide();

  } else {
    $('#Question3').fadeIn();
  }
});
// Show/Hide surgicalHistoryOther if checked/unchecked
if ($('#cannotTell3').is(':checked')) {
  $('#Question3').hide();
} else {
  $('#Question3').show();
}

// Hide & reset Question8 inputs when cannotTell8 is selected
$('#cannotTell8').change(function () {
  if ($('#cannotTell8').is(':checked')) {
    $('#Question8').fadeOut();
    numUrinate[0].value = "";
    urinate[0].checked = false;
    urinate[1].checked = false;
    urinateOther[0].value = "";
    numExcrete[0].value = "";
    excrete[0].checked = false;
    excrete[1].checked = false;
    excreteOther[0].value = "";

    excreteBelly[0].checked = false;
    excreteBelly[1].checked = false;
    excreteBellyOther[0].value = "";

    $('#urinateOther').hide();
    $('#excreteOther').hide();
    $('#excreteBellyOther').hide();

  } else {
    $('#Question8').fadeIn();
  }
});
// Show/Hide  if checked/unchecked
if ($('#cannotTell8').is(':checked')) {
  $('#Question8').hide();
} else {
  $('#Question8').show();
}

// Hide & reset Question9 inputs when cannotTell9 is selected
$('#cannotTell9').change(function () {
  if ($('#cannotTell9').is(':checked')) {
    $('#Question9').fadeOut();
    cigarette[0].checked = false;
    cigarette[1].checked = false;
    cigaretteOther[0].value = "";

    alcohol[0].checked = false;
    alcohol[1].checked = false;
    alcoholOther[0].value = "";

    $('#cigaretteOther').hide();
    $('#alcoholOther').hide();

  } else {
    $('#Question9').fadeIn();
  }
});
// Show/Hide  if checked/unchecked
if ($('#cannotTell9').is(':checked')) {
  $('#Question9').hide();
} else {
  $('#Question9').show();
}