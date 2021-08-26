require("dotenv").config();

let PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_URI;
let NODE_ENV = process.env.NODE_ENV;
let API_KEY = process.env.API_KEY;
let AUTH_KEY = process.env.AUTH_KEY;
let EMAIL_USERNAME = process.env.EMAIL_USERNAME;
let EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

module.exports = {
  PORT,
  NODE_ENV,
  MONGODB_URI,
  API_KEY,
  AUTH_KEY,
  EMAIL_USERNAME,
  EMAIL_PASSWORD,
};
