const express = require('express');
const db = require('../models');
const User = db.User;


var userController = {};


userController.create = function (req, res) {
    console.log('Planning: ' + JSON.stringify(req.body));
    User.create({
      nom: req.body.nom,
      prenom : req.body.prenom,
      email: req.body.email,
    }, {
      attributes: {
        include: ["id", "nom", "prenom","email"]
      }
    }).then(user => {
      res.send(user);
    })
  }
  
  userController.update = function (req, res) {

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