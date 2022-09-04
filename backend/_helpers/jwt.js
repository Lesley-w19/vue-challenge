const expressJwt = require('express-jwt');
const test = require("dotenv").config();
const secret = test.ACCESS_TOKEN_SECRET;

module.exports = jwt;

function jwt() {
  return expressJwt({ secret, algorithms: ["HS256"] }).unless({
    path: [
      // public routes that don't require authentication
      "/users/authenticate",
    ],
  });
}
