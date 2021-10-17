const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const cookieParser = require("cookie-parser");
const session = require("express-session");

const jwt = require("jsonwebtoken");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "cvsudatabase",
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  session({
    key: "userId",
    secret: "osas",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24 * 1000,
    },
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/admin", (req, res) => {
  const sqlSelect = "SELECT * FROM admin_password;";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

const verifyJWT = (req, res, next) => {
  const token = req.headers("x-access-token");
  if (!token) {
    res.send("Need token");
    console.log("needtoken");
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "Fail to authenticate" });
        console.log("fail");
      } else {
        req.userId = decoded.id;
        console.log("sucess");
        next();
      }
    });
  }
};

app.get("/api/isUserAuth", verifyJWT, (req, res) => {
  res.send({ message: "verified" });
});

app.post("/api/login", (req, res) => {
  const password = req.body.password;
  db.query(
    "SELECT * FROM admin_password WHERE adminpass = ?;",
    [password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        if (result.length > 0) {
          const id = result[0].id;
          const token = jwt.sign({ id }, "jwtSecret", {
            expiresIn: 300,
          });

          req.session.user = result;
          console.log(req.session.user);
          res.json({ auth: true, token: token, result: result });
        } else {
          res.send({ message: "Wrong password!" });
        }
      }
    }
  );
});

app.get("/api/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.put("/api/updatecourse", (req, res) => {
  const sqlSelect =
    "UPDATE cvsu_students SET courseandsection = concat(course,'-', section, '-', yearNumber) ";

  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
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

app.get("/api/recentlyadded", (req, res) => {
  const sqlTotal = "SELECT * FROM cvsu_students order by id DESC LIMIT 5 ";
  db.query(sqlTotal, (err, result) => {
    res.send(result);
  });
});

app.get("/api/totalbsee", (req, res) => {
  const sqlTotal = "SELECT * FROM cvsu_students WHERE course = 'BSEE' ";
  db.query(sqlTotal, (err, result) => {
    res.send(result);
  });
});

app.get("/api/totalbsse", (req, res) => {
  const sqlTotal = "SELECT * FROM cvsu_students WHERE course = 'BSSE' ";
  db.query(sqlTotal, (err, result) => {
    res.send(result);
  });
});
app.get("/api/totalbsbm", (req, res) => {
  const sqlTotal = "SELECT * FROM cvsu_students WHERE course = 'BSBM' ";
  db.query(sqlTotal, (err, result) => {
    res.send(result);
  });
});
app.get("/api/totalbscs", (req, res) => {
  const sqlTotal = "SELECT * FROM cvsu_students WHERE course = 'BSCS' ";
  db.query(sqlTotal, (err, result) => {
    res.send(result);
  });
});
app.get("/api/totalbshm", (req, res) => {
  const sqlTotal = "SELECT * FROM cvsu_students WHERE course = 'BSHM' ";
  db.query(sqlTotal, (err, result) => {
    res.send(result);
  });
});
app.get("/api/totalbsit", (req, res) => {
  const sqlTotal = "SELECT * FROM cvsu_students WHERE course = 'BSIT' ";
  db.query(sqlTotal, (err, result) => {
    res.send(result);
  });
});
app.get("/api/totalbspsych", (req, res) => {
  const sqlTotal = "SELECT * FROM cvsu_students WHERE course = 'BSPSYCH' ";
  db.query(sqlTotal, (err, result) => {
    res.send(result);
  });
});
app.get("/api/totalbstm", (req, res) => {
  const sqlTotal = "SELECT * FROM cvsu_students WHERE course = 'BSTM' ";
  db.query(sqlTotal, (err, result) => {
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
    sibling1,
    sibling2,
    sibling3,
    sibling4,
    sibling5,
  } = req.body;

  const sqlInsert =
    "INSERT INTO cvsu_students (studentNumber, lastName, firstName, middleName, email , age, birthday, yearStarted, course, yearNumber, section, currentYear, gender, phoneNumber, telephoneNumber, primaryAddress, province, city, villageorbarangay, zipcode, highschoolName, highschoolAddress, highschoolYearGraduated, elementaryName, elementaryAddress, elementaryYearGraduated, fatherName, fatherOccupation, motherName, motherOccupation, sibling1, sibling2, sibling3, sibling4, sibling5) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
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
      sibling1,
      sibling2,
      sibling3,
      sibling4,
      sibling5,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ message: "Student Number is already taken" });
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
    res.send(result);
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
    sibling1,
    sibling2,
    sibling3,
    sibling4,
    sibling5,
  } = req.body;

  const sqlUpdate =
    "UPDATE cvsu_students SET studentNumber = ?, lastName = ?,  firstName = ?,  middleName = ?,  email = ?,  age = ?,  birthday = ?,  yearStarted = ?,  course = ?, " +
    "yearNumber = ?,  section = ?,  currentYear = ?,  gender = ?,  phoneNumber = ?,  telephoneNumber = ?,  primaryAddress = ?,  province = ?,  city = ?,  villageorbarangay = ?,  " +
    "zipcode = ?,  highschoolName = ?,  highschoolAddress = ?,  highschoolYearGraduated = ?,  elementaryName = ?,  elementaryAddress = ?,  elementaryYearGraduated = ?,  fatherName = ?, " +
    " fatherOccupation = ?,  motherName = ?,  motherOccupation = ?, sibling1 = ?, sibling2 = ?, sibling3 = ?, sibling4 = ?, sibling5 = ? WHERE id = ?;";

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
      sibling1,
      sibling2,
      sibling3,
      sibling4,
      sibling5,
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
