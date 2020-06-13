var express = require('express');
var router = express.Router();
md5 = require('js-md5');
var db = require('../database');


/* GET users listing. */
router.get('/api/allUsers', getAllUsers);
router.get('/api/user/:idUser', getUserById);
router.post('/api/vote', postVote);
router.post('/api/noterDoc', noteDocument);
router.post('/api/noterCom', noteCommentaire);
router.post('/api/commenterDoc', commenterDocument);
router.post('/api/registerUser', registerUser);


function registerUser(req, res, next){
  db("utilisateur")
      .insert({
        id_utilisateur: req.body.id_utilisateur,
        nom: req.body.nom,
        prenom: req.body.prenom,
        password: md5.hex(req.body.password),
        email: req.body.email,
        birthday: req.body.birthday,
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
  .where("id_utilisateur", "=", req.params.idUser)
  .then(function (data) {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'user'
      });
  })
  .catch(function (err) {
    return next(err);
  });
}

function getUserById(req, res, next) {
  db
    .select("*")
    .from("utilisateur")
    .where("id_utilisateur", "=", req.params.idUser)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function getAllUsers(req, res, next) {
  db
    .select("*")
    .from("utilisateur")
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'All users'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function postVote(req, res, next) {
  db("vote")
      .insert({
        id_question: req.body.id_question,
        id_utilisateur: req.body.id_utilisateur,
        resultat: req.body.resultat,
      })
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'vote enregistré'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function noteDocument(req, res, next) {
  db("notedocument")
      .insert({
        id_document: req.body.id_document,
        id_utilisateur: req.body.id_utilisateur,
        note: req.body.note,
      })
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'note document enregistré'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function noteCommentaire(req, res, next) {
  db("notecommentaire")
      .insert({
        id_commentaire: req.body.id_commentaire,
        id_utilisateur: req.body.id_utilisateur,
        note: req.body.note,
      })
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'note commentaire enregistré'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function commenterDocument(req, res, next) {
  db("commentaire")
      .insert({
        id_document: req.body.id_document,
        id_utilisateur: req.body.id_utilisateur,
        commentaire: req.body.commentaire,
      })
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'commentaire enregistré'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = router;