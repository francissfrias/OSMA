const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "cvsudatabase",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM cvsu_students;";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.get("/api/get/:id", (req, res) => {
  const sqlSelect =
    "SELECT * FROM cvsu_students WHERE id = " + req.params.id + ";";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const {
    studentNumber,
    lastName,
    firstName,
    middleName,
    email,
    age,
    birthday,
    yearStarted,
    course,
    yearNumber,
    section,
    currentYear,
    gender,
    phoneNumber,
    telephoneNumber,
    primaryAddress,
    province,
    city,
    villageorbarangay,
    zipcode,
    highschoolName,
    highschoolAddress,
    highschoolYearGraduated,
    elementaryName,
    elementaryAddress,
    elementaryYearGraduated,
    fatherName,
    fatherOccupation,
    motherName,
    motherOccupation,
  } = req.body;

  const sqlInsert =
    "INSERT INTO cvsu_students (studentNumber, lastName, firstName, middleName, email , age, birthday, yearStarted, course, yearNumber, section, currentYear, gender, phoneNumber, telephoneNumber, primaryAddress, province, city, villageorbarangay, zipcode, highschoolName, highschoolAddress, highschoolYearGraduated, elementaryName, elementaryAddress, elementaryYearGraduated, fatherName, fatherOccupation, motherName, motherOccupation ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
  db.query(
    sqlInsert,
    [
      studentNumber,
      lastName,
      firstName,
      middleName,
      email,
      age,
      birthday,
      yearStarted,
      course,
      yearNumber,
      section,
      currentYear,
      gender,
      phoneNumber,
      telephoneNumber,
      primaryAddress,
      province,
      city,
      villageorbarangay,
      zipcode,
      highschoolName,
      highschoolAddress,
      highschoolYearGraduated,
      elementaryName,
      elementaryAddress,
      elementaryYearGraduated,
      fatherName,
      fatherOccupation,
      motherName,
      motherOccupation,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.delete("/api/delete/:id", (req, res) => {
  const name = req.params.id;
  const sqlDelete = "DELETE FROM cvsu_students WHERE id = ?;";

  db.query(sqlDelete, name, (err, result) => {
    if (err) console.log(err);
  });
});

app.put("/api/update/:id", (req, res) => {
  const id = req.params.id;
  const {
    studentNumber,
    lastName,
    firstName,
    middleName,
    email,
    age,
    birthday,
    yearStarted,
    course,
    yearNumber,
    section,
    currentYear,
    gender,
    phoneNumber,
    telephoneNumber,
    primaryAddress,
    province,
    city,
    villageorbarangay,
    zipcode,
    highschoolName,
    highschoolAddress,
    highschoolYearGraduated,
    elementaryName,
    elementaryAddress,
    elementaryYearGraduated,
    fatherName,
    fatherOccupation,
    motherName,
    motherOccupation,
  } = req.body;

  const sqlUpdate =
    "UPDATE cvsu_students SET studentNumber = ?, lastName = ?,  firstName = ?,  middleName = ?,  email = ?,  age = ?,  birthday = ?,  yearStarted = ?,  course = ?, " +
    "yearNumber = ?,  section = ?,  currentYear = ?,  gender = ?,  phoneNumber = ?,  telephoneNumber = ?,  primaryAddress = ?,  province = ?,  city = ?,  villageorbarangay = ?,  " +
    "zipcode = ?,  highschoolName = ?,  highschoolAddress = ?,  highschoolYearGraduated = ?,  elementaryName = ?,  elementaryAddress = ?,  elementaryYearGraduated = ?,  fatherName = ?, " +
    " fatherOccupation = ?,  motherName = ?,  motherOccupation = ? WHERE id = ?;";

  db.query(
    sqlUpdate,
    [
      studentNumber,
      lastName,
      firstName,
      middleName,
      email,
      age,
      birthday,
      yearStarted,
      course,
      yearNumber,
      section,
      currentYear,
      gender,
      phoneNumber,
      primaryAddress,
      telephoneNumber,
      province,
      city,
      villageorbarangay,
      zipcode,
      highschoolName,
      highschoolAddress,
      highschoolYearGraduated,
      elementaryName,
      elementaryAddress,
      elementaryYearGraduated,
      fatherName,
      fatherOccupation,
      motherName,
      motherOccupation,
      id,
    ],
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
