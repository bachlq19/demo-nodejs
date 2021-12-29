const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lqbach:1234@demo-nodejs.eujxl.mongodb.net/demo-nodejs?retryWrites=true&w=majority"
    );
    console.log("success");
  } catch {
    console.log("fail");
  }
};
connect();

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen("3000", () => {
  console.log("start on port");
});
