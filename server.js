const express = require("express");
const mongoose = require("mongoose");

let app = express();

async function connect() {
  let connection = await mongoose.connect("mongodb://0.0.0.0:27017/Students");
  if (!connection) {
    console.log("not connect");
  } else {
    console.log("is connected");
  }
}
connect();
const StudentsSchema = new mongoose.Schema({
  Studentname: String,
  age: Number,
  phone: String,
  Email: String,
  address: String,
  id: Number,
});

let Studentsmodel = new mongoose.model("Students", StudentsSchema);

const coursesSchema = new mongoose.Schema({
  coursesname: String,
  price: Number,
  numberofparticipants: String,
});

let coursesmodel = new mongoose.model("courses", coursesSchema);

let newuser = new Studentsmodel({
  Studentname: "Nour Mohamed",
  age: "21",
  phone: "016544333",
  Email: "Nour mohamed@gmail.com",
  address: "asrkia",
  id: "2341",
}).save();

let AhmedUser = new Studentsmodel({
  Studentname: "Nourhan Mohamed",
  age: "22",
  phone: "0986554343",
  Email: "Nouhan@gmail.com",
  address: "Zagazig",
  id: "3599",
}).save();

let MohamedElsayed = new Studentsmodel({
  Studentname: "Ahmed asraf",
  age: "25",
  phone: "0986544052",
  Email: "Mohamedash@gmail.com",
  address: "Zagazig",
  id: "1238",
}).save();

let Newunser = new coursesmodel({
  coursesname: "flutter",
  price: "24 ",
  numberofparticipants: "13",
}).save();

let it = new coursesmodel({
  coursesname: "cs",
  price: "30 ",
  numberofparticipants: "17",
}).save();

let Newuser = new coursesmodel({
  coursesname: "is",
  price: "28",
  numberofparticipants: "11",
}).save();

app.get("/Students", async (req, res) => {
  let allStudents = await Studentsmodel.find();
  res.status(200);
  console.log(allStudents.length);
  res.json(allStudents);
});

app.get("/Courses", async (req, res) => {
  let allCourses = await coursesmodel.find();
  res.status(200);
  console.log(allCourses.length);
  res.json(allCourses);
});

app.listen(3000, function () {
  console.log("server now is opend");
});
