var express = require("express");
var router = express.Router();
const UserController = require("../controllers/UserController");
const controller = new UserController();

/* GET users listing. */
router.get("/signup", (req, res) => controller.formulaire(req, res));
router.post("/signup", (req, res) => controller.envoiformulaire(req, res));

module.exports = router;
