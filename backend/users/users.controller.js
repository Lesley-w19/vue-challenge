const express = require("express");
const router = express.Router();
const userService = require("./user.service");

// routes
router.post("/authenticate", authenticate);
router.get("/", getAll);
router.post("/user", addUser);

module.exports = router;

function authenticate(req, res, next) {
  userService
    .authenticate(req.body)
    .then((user) => {
      console.log(user);
    })
    .catch(next);
}

function getAll(req, res, next) {
  userService
    .getAll()
    .then((users) => {
      console.log(users);

    })
    .catch(next);
}

function addUser(req, res, next) {
  userService
    .addUser(req.body)
    .then((user) => res.json(user))
    .catch(next);
}
