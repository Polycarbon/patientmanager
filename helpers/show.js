const mongoose = require('mongoose');

// Load Models
require('../models/Patient');

const Patient = mongoose.model('patient');

module.exports = {
  show: function(req, res){
    const thisPatient = Patient.findOne({ _id: req.params.id});

  Patient.findOne({ _id: req.params.id })
    .then(patient => {

      if(patient.form1 && patient.form2 && patient.form3 && patient.form4){
        thisPatient.populate('form1').populate('form2').populate('form3').populate('form4')
          .then(patient => {
            res.render('patient/show', {
              patient: patient
            });
          }) 
      } else if(patient.form1 && patient.form2 && patient.form3){
        thisPatient.populate('form1').populate('form2').populate('form3')
          .then(patient => {
            res.render('patient/show', {
              patient: patient
            });
          }) 
      } else if(patient.form1 && patient.form2 && patient.form4){
        thisPatient.populate('form1').populate('form2').populate('form4')
          .then(patient => {
            res.render('patient/show', {
              patient: patient
            });
          }) 
      } else if(patient.form2 && patient.form3 && patient.form4){
        thisPatient.populate('form2').populate('form3').populate('form4')
          .then(patient => {
            res.render('patient/show', {
              patient: patient
            });
          })        
      } else if(patient.form1 && patient.form2){
        thisPatient.populate('form1').populate('form2')
          .then(patient => {
            res.render('patient/show', {
              patient: patient
            });
          })        
      } else if(patient.form1 && patient.form3){
        thisPatient.populate('form1').populate('form3')
          .then(patient => {
            res.render('patient/show', {
              patient: patient
            });
          })        
      } else if(patient.form1 && patient.form4){
        thisPatient.populate('form1').populate('form4')
          .then(patient => {
            res.render('patient/show', {
              patient: patient
            });
          })        
      } else if(patient.form2 && patient.form3){
        thisPatient.populate('form2').populate('form3')
          .then(patient => {
            res.render('patient/show', {
              patient: patient
            });
          })        
      } else if(patient.form2 && patient.form4){
        thisPatient.populate('form2').populate('form4')
          .then(patient => {
            res.render('patient/show', {
              patient: patient
            });
          })        
      } else if(patient.form3 && patient.form4){
        thisPatient.populate('form3').populate('form4')
          .then(patient => {
            res.render('patient/show', {
              patient: patient
            });
          })        
      } else if(patient.form1){
        thisPatient.populate('form1')
          .then(patient => {
            res.render('patient/show', {
              patient: patient
            });
          })        
      } else if(patient.form2){
        thisPatient.populate('form2')
          .then(patient => {
            res.render('patient/show', {
              patient: patient
            });
          })        
      } else if(patient.form3){
        thisPatient.populate('form3')
          .then(patient => {
            res.render('patient/show', {
              patient: patient
            });
          })        
      } else if(patient.form4){
        thisPatient.populate('form4')
          .then(patient => {
            res.render('patient/show', {
              patient: patient
            });
          })        
      } else {
        res.render('patient/show', {
          patient: patient
        });
      }
    });
  }
}