const express = require('express');
const db = require('../models');
const Parcours = db.Parcours;


var parcoursController = {};


parcoursController.create = function (req, res) {
    console.log('Planning: ' + JSON.stringify(req.body));
    Parcours.create({
      longitude: req.body.longitude,
      latitude : req.body.latitude,
    }, {
      attributes: {
        include: ["id", "latitude", "longit","email"]
      }
    }).then(user => {
      res.send(user);
    })
  }
  
 parcoursController.update = function (req, res) {

      console.log('Planning: ' + req.params.id);
      var id = req.body.id
      User.update({
        nom: req.body.nom,
        prenom : req.body.prenom,
        email: req.body.email,
      }, {
        where: {
          id: id,
        }
      })
  }

