const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const config = require("./utils/config");
dotenv.config();

// const MONGO_URL = "mongodb+srv://LinX:Navaneeth@LiX@linx.xx7ku.mongodb.net/LinX?retryWrites=true&w=majority";
// console.log(config.MONGODB_URI);
mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

// const PORT = 5000;
const server = app.listen(config.PORT, () => {
  console.log(`Listening to PORT - ${config.PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection!! Shutting Down the server....");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
