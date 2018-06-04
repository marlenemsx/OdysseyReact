const db = require("../models/index.js");

class UserController {
  formulaire(req, res) {
    res.render("users/signup");
  }
  envoiformulaire(req, res) {
    db.User.create(req.body).then(User => res.send("Bravo bootboot"));
  }
}

module.exports = UserController;
