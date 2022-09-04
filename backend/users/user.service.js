const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const  connection = require("_helpers/connection");

// users hardcoded for simplicity, store in a db for production applications
const users = [
  {
    id: 0,
    username: "admin",
    password: "admin",
    firstName: "Admin",
    lastName: "UserAdmin",
  },
  {
    id: 1,
    username: "user",
    password: "user",
    firstName: "Test",
    lastName: "User",
  },
];

module.exports = {
  authenticate,
  getAll,
  addUser,
};


async function authenticate(usr) {
  // const user = users.find(
  //   (u) => u.username === username && u.password === password
  // );
  // const sqlQuery = "SELECT * FROM users WHERE username = ? AND password = ?;
  const { username, password } = usr;
  const user = await connection.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      // console.log(result)
      console.log("User found!!");
    }
  );

  if (!user) throw "Username or password is incorrect";

  // create a jwt token that is valid for 7 days
  const secret = process.env.ACCESS_TOKEN_SECRET;
  const token = jwt.sign({ sub: user.id }, secret, { expiresIn: "7d" });

  return {
    ...omitPassword(user),
    token,
  };
}

async function getAll() {
  const sqlQuery = "SELECT * FROM users";
  let users = await connection.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    }
    // console.log(result.JSON.stringify());
  });
  return users;
}

async function addUser(user) {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);

    connection.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [user.username, user.email, hashedPassword],
      (err, result) => {
        // console.log(result);
        if (err) {
          console.log(err);
        }
        // result.message = "User added successfully!";
        console.log("User added successfully...");
      }
    );
  } catch (error) {
    console.log(error);
  }
}

// helper functions

function omitPassword(user) {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}
