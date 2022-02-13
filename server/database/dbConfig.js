const mongoose = require("mongoose");

const DB_CONNECT = "mongodb://127.0.0.1:27017/zomatodb";

const connectDB = () => {
  mongoose
    .connect(DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server => ${data.connection.host}`);
    });
};

module.exports = connectDB;
