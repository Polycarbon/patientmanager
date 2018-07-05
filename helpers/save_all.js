const mongoose = require('mongoose');

// Load Models
require('../models/Patient');

const Patient = mongoose.model('patient');

var save_function = require('./save_function');

module.exports = {
  save: function (req, res, n) {
      Patient.findOne({_id: req.params.id})
        .then(patient => {
          // save form
          var newPatient_form = module.exports.saveForm(req, res, n);
          // get saved form_id
          var form = newPatient_form._id;
          // update existing patient by adding form_id
          module.exports.updateForm(patient, req, res, form, n);
        });
  },
  checkSentForm: function (patient, n) {
    switch (n) {
      case 1:
        return patient.form1
        break;
      case 2:
        return patient.form2
        break;
      case 3:
        return patient.form3
        break;
      case 4:
        return patient.form4
        break;
      default:
        break;
    }
  },
  saveForm: function (req, res, n) {

    var newPatient_form;
    switch (n) {
      case 1:
        newPatient_form = save_function.saveForm1(req, res);
        break;
      case 2:
        newPatient_form = save_function.saveForm2(req, res);
        break;
      case 3:
        newPatient_form = save_function.saveForm3(req, res);
        break;
      case 4:
        newPatient_form = save_function.saveForm4(req, res);
        break;
      default:
        console.log('error')
    }
    return newPatient_form;
  },
  updateForm: function (patient, req, res, form, n) {
    switch (n) {
      case 1:
        Patient.update({ _id: patient._id }, { $set: { form1: form } }, function (err, result) {
          if (err) console.log(err);
          else {
            req.flash('success_msg', 'Patient Form Added');
            res.redirect(`/patient/show/${patient.id}`);
          }
        });
        break;
      case 2:
        Patient.update({ _id: patient._id }, { $set: { form2: form } }, function (err, result) {
          if (err) console.log(err);
          else {
            req.flash('success_msg', 'Patient Form Added');
            res.redirect(`/patient/show/${patient.id}`);
          }
        });
        break;
      case 3:
        Patient.update({ _id: patient._id }, { $set: { form3: form } }, function (err, result) {
          if (err) console.log(err);
          else {
            req.flash('success_msg', 'Patient Form Added');
            res.redirect(`/patient/show/${patient.id}`);
          }
        });
        break;
      case 4:
        Patient.update({ _id: patient._id }, { $set: { form4: form } }, function (err, result) {
          if (err) console.log(err);
          else {
            req.flash('success_msg', 'Patient Form Added');
            res.redirect(`/patient/show/${patient.id}`);
          }
        });
        break;
      default:
        console.log('error')
    }
  }
}

