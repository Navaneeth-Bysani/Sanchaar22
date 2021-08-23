require("dotenv").config();

let PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_URI;
let NODE_ENV = process.env.NODE_ENV;

module.exports = {
  PORT,
  NODE_ENV,
  MONGODB_URI,
};
