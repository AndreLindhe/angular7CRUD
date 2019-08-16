const express = require('express');
const app = express();
const businessRoutes = express.Router();

let Business = require('../models/Business');

businessRoutes.route('/add').post(function(req, res) {
  let business = new Business(req.body);
  business.save()
    .then(business => {
      res.status(200).json({'business': "Business is added successfully"});
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
});

businessRoutes.route('/').get(function (req, res) {
  Business.find(function(err, businesses) {
    if(err) {
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

businessRoutes.route('/edit/:id').get(function(req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business) {
    //console.log(business);
    res.json(business);
  });
});

businessRoutes.route('/update/:id').post(function(req, res) {

  Business.findById(req.params.id, function (err, business) {
    if(err) {

      return new Error('Could not load document');
    }
    else {
      business.person_Name = req.body.person_Name;
      business.business_Name = req.body.business_Name;
      business.business_gst_Number = req.body.business_gst_Number;

      business.save().then(business => {
        res.json('Upate complete');
      })
      .catch(err => {
        res.status(400).send("Unable to  update the database");
      });
    }
  });
});


businessRoutes.route('/delete/:id').get(function(req,res){
  Business.findByIdAndRemove({_id: req.params.id}, function(err, business) {
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = businessRoutes;
