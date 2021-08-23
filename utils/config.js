require("dotenv").config();

let PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_URI;
let NODE_ENV = process.env.NODE_ENV;
let API_KEY = process.env.API_KEY;
let AUTH_KEY = process.env.AUTH_KEY;

module.exports = {
  PORT,
  NODE_ENV,
  MONGODB_URI,
  API_KEY,
  AUTH_KEY,
};
