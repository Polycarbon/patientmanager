const mongoose = require('mongoose');

// Load Models
require('../models/Form1');
require('../models/Form2');
require('../models/Form3');
require('../models/Form4');

const Form1 = mongoose.model('form1');
const Form2 = mongoose.model('form2');
const Form3 = mongoose.model('form3');
const Form4 = mongoose.model('form4');

module.exports = {
  saveForm1: function (req, res) {
    var newPatient = module.exports.init_form1(req, res);
    newPatient.user_created = req.user.firstName + ' ' + req.user.lastName;
    const form1 = new Form1(newPatient);
    form1.save();

    return form1;
  },
  saveForm2: function (req, res) {
    var newPatient = module.exports.init_form2(req, res);
    newPatient.user_created = req.user.firstName + ' ' + req.user.lastName;
    const form2 = new Form2(newPatient);
    form2.save();

    return form2;
  },
  saveForm3: function (req, res) {
    var newPatient = module.exports.init_form3(req, res);
    newPatient.user_created = req.user.firstName + ' ' + req.user.lastName;
    const form3 = new Form3(newPatient);
    form3.save();

    return form3;
  },
  saveForm4: function (req, res) {
    var newPatient = module.exports.init_form4(req, res);
    newPatient.user_created = req.user.firstName + ' ' + req.user.lastName;
    const form4 = new Form4(newPatient);
    form4.save();

    return form4;
  },
  init_form1: function (req, res) {
    const form1 = {
      recordDate: req.body.recordDate,
      recordTime: req.body.recordTime,
      history: req.body.history,
      history_Other: req.body.history_Other,
      CC: req.body.CC,
      PI: req.body.PI,
      G: req.body.G,
      P: req.body.P,
      A: req.body.A,
      L: req.body.L,
      Last: req.body.Last,
      LMP: req.body.LMP,
      EDC: req.body.EDC,
      Preg: req.body.Preg,
      ANC: req.body.ANC,
      first_ANC: req.body.first_ANC,
      count_ANC: req.body.count_ANC,
      TT: req.body.TT,
      TT_more: req.body.TT_more,
      VDRL: req.body.VDRL,
      HbsAg: req.body.HbsAg,
      HbeAg: req.body.HbeAg,
      AntiHIV: req.body.AntiHIV,
      Hct: req.body.Hct,
      Blood_Group: req.body.Blood_Group,
      Rh: req.body.Rh,
      OF: req.body.OF,
      DCIP: req.body.DCIP,
      Thallasemia: req.body.Thallasemia,
      preg_sym: req.body.preg_sym,
      Past_Hx: req.body.Past_Hx,
      med_Allergic: req.body.med_Allergic,
      smoke: req.body.smoke,
      personal_smoke_text: req.body.personal_smoke_text,
      alcohol: req.body.alcohol,
      personal_alcohol_text: req.body.personal_alcohol_text,
      drug: req.body.drug,
      personal_drug_text: req.body.personal_drug_text,
      job: req.body.job,
      DM: req.body.DM,
      HT: req.body.HT,
      Asthma: req.body.Asthma,
      Renal_disease: req.body.Renal_disease,
      Heart_disease: req.body.Heart_disease,
      Blood_disease: req.body.Blood_disease,
      Other_disease: req.body.Other_disease,
      family_Other: req.body.family_Other,
      Social_Hx: req.body.Social_Hx,
      HEENT: req.body.HEENT,
      heent_Other: req.body.heent_Other,
      Respiratory: req.body.Respiratory,
      respiratory_Other: req.body.respiratory_Other,
      Cardiovascular: req.body.Cardiovascular,
      cardiovascular_Other: req.body.cardiovascular_Other,
      Gastrointestital: req.body.Gastrointestital,
      gastro_Other: req.body.gastro_Other,
      Genito: req.body.Genito,
      genito_Other: req.body.genito_Other,
      Gynecological: req.body.Gynecological,
      gynecological_Other: req.body.gynecological_Other,
      Neurology: req.body.Neurology,
      neurology_Other: req.body.neurology_Other,
      Other: req.body.Other,
      other_Other: req.body.other_Other,
      T: req.body.T,
      PR: req.body.PR,
      RR: req.body.RR,
      BP: req.body.BP,
      BW: req.body.BW,
      HT: req.body.HT,
      GA: req.body.GA,
      Skin: req.body.Skin,
      HEENT_lower: req.body.HEENT_lower,
      Heart: req.body.Heart,
      Lung: req.body.Lung,
      Abdomen: req.body.Abdomen,
      Extremities: req.body.Extremities,
      Neuro: req.body.Neuro,
      Others: req.body.Others,
      HF: req.body.HF,
      Position: req.body.Position,
      FHS: req.body.FHS,
      Cervix: req.body.Cervix,
      Eff: req.body.Eff,
      Station: req.body.Station,
      Membrane: req.body.Membrane,
      AF: req.body.AF,
      AF_time: req.body.AF_time,
      Preg_other: req.body.Preg_other,
      Inves_hct: req.body.Inves_hct,
      Urine_Albumin: req.body.Urine_Albumin,
      Urine_Sugar: req.body.Urine_Sugar,
      Inves_other: req.body.Inves_other,
      imp: req.body.imp,
      plan: req.body.plan,
      doctor_sign: req.body.doctor_sign,
      staff_sign: req.body.staff_sign,
      patient_name: req.body.patient_name,
      patient_age: req.body.patient_age,
      ward: req.body.ward,
      room: req.body.room,
      HN: req.body.HN,
      AN: req.body.AN,
      doctor_assigned: req.body.doctor_assigned,
    };
    return form1;
  },
  init_form2: function (req, res) {
    const form2 = {
      patient_name: req.body.patient_name,
      patient_age: req.body.patient_age,
      HN: req.body.HN,
      doctor: req.body.doctor,
      G: req.body.G,
      P: req.body.P,
      A: req.body.A,
      L: req.body.L,
      Last: req.body.Last,
      Preg: req.body.Preg,
      Preg_sym: req.body.Preg_sym,
      Labour: req.body.Labour,
      Labour_field: req.body.Labour_field,
      Labour_hurt: req.body.Labour_hurt,
      phase1_hour: req.body.phase1_hour,
      phase1_min: req.body.phase1_min,
      uterus: req.body.uterus,
      phase2_hour: req.body.phase2_hour,
      phase2_min: req.body.phase2_min,
      bornDate: req.body.bornDate,
      bornTime: req.body.bornTime,
      phase3_hour: req.body.phase3_hour,
      phase3_min: req.body.phase3_min,
      placenta: req.body.placenta,
      MR: req.body.MR,
      MR_date: req.body.MR_date,
      MR_time: req.body.MR_time,
      appearance: req.body.appearance,
      med_time_does: req.body.med_time_does,
      Delivery: req.body.Delivery,
      delivery_field: req.body.delivery_field,
      Indication: req.body.Indication,
      birth_delivery: req.body.birth_delivery,
      Episiotomy: req.body.Episiotomy,
      Perineum: req.body.Perineum,
      Suture: req.body.Suture,
      placenta_cord: req.body.placenta_cord,
      placenta_w: req.body.placenta_w,
      cord_length: req.body.cord_length,
      placenta_app: req.body.placenta_app,
      placenta_app_field: req.body.placenta_app_field,
      placenta_all: req.body.placenta_all,
      abnormalcord_text: req.body.abnormalcord_text,
      POSTPARTUM: req.body.POSTPARTUM,
      blood_loss: req.body.blood_loss,
      BP: req.body.BP,
      mmHg: req.body.mmHg,
      med_time_does2: req.body.med_time_does2,
      time1: req.body.time1,
      BP1: req.body.BP1,
      mmHg1: req.body.mmHg1,
      PR1: req.body.PR1,
      note1: req.body.note1,
      time2: req.body.time2,
      BP2: req.body.BP2,
      mmHg2: req.body.mmHg2,
      PR2: req.body.PR2,
      note2: req.body.note2,
      time3: req.body.time3,
      BP3: req.body.BP3,
      mmHg3: req.body.mmHg3,
      PR3: req.body.PR3,
      note3: req.body.note3,
      time4: req.body.time4,
      BP4: req.body.BP4,
      mmHg4: req.body.mmHg4,
      PR4: req.body.PR4,
      note4: req.body.note4,
      time5: req.body.time5,
      BP5: req.body.BP5,
      mmHg5: req.body.mmHg5,
      PR5: req.body.PR5,
      note5: req.body.note5,
      gender: req.body.gender,
      weight: req.body.weight,
      min1: req.body.min1,
      min5: req.body.min5,
      min10: req.body.min10,
      OF: req.body.OF,
      chest: req.body.chest,
      length: req.body.length,
      infant: req.body.infant,
      remark: req.body.remark,
      mom_state: req.body.mom_state,
      baby_state: req.body.baby_state,
      T_cc: req.body.T_cc,
      PR_min: req.body.PR_min,
      R_min: req.body.R_min,
      BP_mmHg: req.body.BP_mmHg,
      temp: req.body.temp,
      uterus_contract: req.body.uterus_contract,
      baby_milk: req.body.baby_milk,
      urine_out: req.body.urine_out,
      excretion: req.body.excretion,
      breast_milk: req.body.breast_milk,
      baby_abnormalities: req.body.baby_abnormalities,
      mom_abnormalities: req.body.mom_abnormalities,
      logged_nurse: req.body.logged_nurse
    };
    return form2;
  },
  init_form3: function (req, res) {
    const form3 = {
      dorm: req.body.dorm,
      room: req.body.room,
      name: req.body.name,
      age: req.body.age,
      HN: req.body.HN,
      addr1: req.body.addr1,
      addr2: req.body.addr2,
      addr3: req.body.addr3,
      addr4: req.body.addr4,
      addr5: req.body.addr5,
      phone: req.body.phone,
      nearbyplace: req.body.nearbyplace,
      job: req.body.job,
      checkInDate: req.body.checkInDate,
      checkInTime: req.body.checkInTime,
      doctor: req.body.doctor,
      symptom: req.body.symptom,
      G: req.body.G,
      P: req.body.P,
      GA: req.body.GA,
      currentSymptom: req.body.currentSymptom,
      complications: req.body.complications,
      congenitalDisorder: req.body.congenitalDisorder,
      T: req.body.T,
      pressure: req.body.pressure,
      R: req.body.R,
      BP: req.body.BP,
      O2Sat: req.body.O2Sat,
      weight: req.body.weight,
      height: req.body.height,
      BMI: req.body.BMI,
      Diagnosis1: req.body.Diagnosis1,
      Diagnosis2: req.body.Diagnosis2
    };
    return form3;
  },
  init_form4: function (req, res) {
    let name = req.body.name[0];
    let age = req.body.age[0];
    let HN = req.body.HN[0];
    let wardInput = req.body.wardInput[0];

    const form4 = {
      reportFrom: req.body.reportFrom,
      wardInput: wardInput,
      name: name,
      age: age,
      HN: HN,
      analysis: req.body.analysis,
      roomType: req.body.roomType,
      equip1: req.body.equip1,
      equip2: req.body.equip2,
      equip3: req.body.equip3,
      equip4: req.body.equip4,
      equipmentOther: req.body.equipmentOther,
      reporter: req.body.reporter,
      reportDate: req.body.reportDate,
      reportTime: req.body.reportTime,
      reported: req.body.reported,
      checkDoc1: req.body.checkDoc1,
      checkDoc2: req.body.checkDoc2,
      checkDoc3: req.body.checkDoc3,
      checkDoc4: req.body.checkDoc4,
      checkDoc5: req.body.checkDoc5,
      checkDocOther: req.body.checkDocOther,
      bring: req.body.bring,
      bringOther: req.body.bringOther,
      examiner: req.body.examiner,
      checkInDate: req.body.checkInDate,
      checkInTime: req.body.checkInTime,
      transport: req.body.transport,
      transportOther: req.body.transportOther,
      symptom: req.body.symptom,
      G: req.body.G,
      P: req.body.P,
      A: req.body.A,
      L: req.body.L,
      GA: req.body.GA,
      ANC: req.body.ANC,
      beforeArrive: req.body.beforeArrive,
      Temp: req.body.Temp,
      Pulse: req.body.Pulse,
      Resp: req.body.Resp,
      BP: req.body.BP,
      O2Sat: req.body.O2Sat,
      vitalOther: req.body.vitalOther,
      cannotTell3: req.body.cannotTell3,
      genetics: req.body.genetics,
      geneticsOther: req.body.geneticsOther,
      anyMedication: req.body.anyMedication,
      anyMedicationOther: req.body.anyMedicationOther,
      medicalProblems: req.body.medicalProblems,
      medicalProblemsOther: req.body.medicalProblemsOther,
      surgicalHistory: req.body.surgicalHistory,
      surgicalHistoryOther: req.body.surgicalHistoryOther,
      medicationHistory: req.body.medicationHistory,
      medicationHistoryOther: req.body.medicationHistoryOther,
      roleInFamily: req.body.roleInFamily,
      educationLevel: req.body.educationLevel,
      relationshipStatus: req.body.relationshipStatus,
      job: req.body.job,
      religion: req.body.religion,
      secondaryContact: req.body.secondaryContact,
      secondaryContactRelation: req.body.secondaryContactRelation,
      tel: req.body.tel,
      contactPlace: req.body.contactPlace,

      cannotTell6: req.body.cannotTell6,
      sleep: req.body.sleep,
      sleepProblems: req.body.sleepProblems,
      sleepProblemsOther: req.body.sleepProblemsOther,
      usePill: req.body.usePill,
      usePillOther: req.body.usePillOther,

      cannotTell7: req.body.cannotTell7,
      numEating: req.body.numEating,
      Food: req.body.Food,
      foodOther: req.body.foodOther,
      foodProblems: req.body.foodProblems,
      foodProblemsOther: req.body.foodProblemsOther,
      weight: req.body.weight,
      downWeightOther: req.body.downWeightOther,
      upWeightOther: req.body.upWeightOther,

      cannotTell8: req.body.cannotTell8,
      numUrinate: req.body.numUrinate,
      urinate: req.body.urinate,
      urinateOther: req.body.urinateOther,
      numExcrete: req.body.numExcrete,
      excrete: req.body.excrete,
      excreteOther: req.body.excreteOther,
      excreteBelly: req.body.excreteBelly,
      excreteBellyOther: req.body.excreteBellyOther,

      cannotTell9: req.body.cannotTell9,
      cigarette: req.body.cigarette,
      cigaretteOther: req.body.cigaretteOther,
      alcohol: req.body.alcohol,
      alcoholOther: req.body.alcoholOther,

    };
    return form4;
  }
}
