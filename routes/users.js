const express = require('express');
const router = express.Router();
md5 = require('js-md5');
const db = require('../database');


router.post('/api/registerUser', registerUser);
router.post('/api/loginUser', loginUser);

function registerUser(req, res, next){
    db("utilisateur")
        .insert({
          id_utilisateur: req.body.id_utilisateur,
          nom: req.body.nom,
          prenom: req.body.prenom,
          password: md5.hex(req.body.password),
          email: req.body.email,
        })
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'utilisateur enregistré'
          });
      })
      .catch(function (err) {
        message = "error 400";
        res.status(400).json(message);
      });
  }
  
  function loginUser(req, res, next){
    db
    .select("*")
    .from("utilisateur")
    .where("email", "=", req.body.emailUser).andWhere("password", "=", md5.hex(req.body.mdpUser))
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'user connecté'
        });
    })
    .catch(function (err) {
      message = "error 400";
      res.status(400).json(message);
    });
  }

module.exports = router;