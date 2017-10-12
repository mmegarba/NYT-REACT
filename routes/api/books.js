const router = require("express").Router();
const booksController = require("../../controllers/articlesController");
var express = require("express");
const db = require("../../models");




module.exports = function(app){

  app.get("/api/articles", function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

})



app.post("/api/articles", function(req, res) {
  db.Article
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

})

app.get("/api/articles/:id", function(req, res) {
  db.Article
    .findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

})





}
// Matches with "/api/books"
// router.route("/api/books")
//   .get(booksController.findAll)
//   .post(booksController.create);
//
// // Matches with "/api/books/:id"
// router.route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);
//
// module.exports = router;
