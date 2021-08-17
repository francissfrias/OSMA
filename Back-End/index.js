const express = require('express')
const bodyParser = require ('body-parser');
const cors = require ("cors");
const app = express()
const mysql = require ('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"password",
    database: "cvsudatabase",
});     

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));


app.get('/api/get', (req,res) => {
    const sqlSelect = "SELECT * FROM cvsu_students;"
    db.query(sqlSelect, (err,result) => {
        res.send(result);

    })
});
app.get('/api/get/id', (req,res) => {
    const sqlSelect = "SELECT * FROM cvsu_students WHERE id = "+ req.params.id +";"
     db.query(sqlSelect, (err,result) => {
         res.send(result);
     })
 });

 app.post("/api/insert", (req,res) =>{

    const studentNumber = req.body.studentNumber
    const lastName = req.body.lastName
    const firstName = req.body.firstName
    const middleName = req.body.middleName
    const email = req.body.email
    const age = req.body.age
    const birthday = req.body.birthday
    const yearStarted = req.body.yearStarted
    const course = req.body.course
    const yearNumber = req.body.yearNumber
    const section = req.body.section
    const currentYear = req.body.currentYear
    const gender = req.body.gender
    const phoneNumber = req.body.phoneNumber
    const telephoneNumber = req.body.telephoneNumber
    const primaryAddress = req.body.primaryAddress
    const province = req.body.province
    const city  = req.body.city
    const villageorbarangay = req.body.villageorbarangay
    const zipcode = req.body.zipcode
    const highschoolName = req.body.highschoolName
    const highschoolAddress = req.body.highschoolAddress
    const highschoolYearGraduated = req.body.highschoolYearGraduated
    const elementaryName = req.body.elementaryName
    const elementaryAddress = req.body.elementaryAddress
    const elementaryYearGraduated = req.body.elementaryYearGraduated
    const fatherName = req.body.fatherName
    const fatherOccupation = req.body.fatherOccupation
    const motherName = req.body.motherName
    const motherOccupation = req.body.motherOccupation

  
    const sqlInsert = "INSERT INTO cvsu_students (studentNumber, lastName, firstName, middleName, email , age, birthday, yearStarted, course, yearNumber, section, currentYear, gender, phoneNumber, telephoneNumber, primaryAddress, province, city, villageorbarangay, zipcode, highschoolName, highschoolAddress, highschoolYearGraduated, elementaryName, elementaryAddress, elementaryYearGraduated, fatherName, fatherOccupation, motherName, motherOccupation ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
    db.query(sqlInsert, [studentNumber, lastName, firstName, middleName, email , age, birthday, yearStarted, course, yearNumber, section, currentYear, gender, phoneNumber, primaryAddress ,telephoneNumber, province, city, villageorbarangay, zipcode, highschoolName, highschoolAddress, highschoolYearGraduated, elementaryName, elementaryAddress, elementaryYearGraduated, fatherName, fatherOccupation, motherName, motherOccupation], (err,result) => {
        console.log(err);

    })
});

    
    app.delete('/api/delete/:id' , (req,res)=>{
        const name = req.params.id
        const sqlDelete = "DELETE FROM cvsu_students WHERE id = ?;";

        db.query(sqlDelete, name, (err,result) =>{
            if (err) console.log(err)
        })
    })
   
    app.put('/api/update/:id', (req,res)=>{
    
        const id = req.params.id
        const studentNumber = req.body.studentNumber
        const lastName = req.body.lastName
        const firstName = req.body.firstName
        const middleName = req.body.middleName
        const email = req.body.email
        const age = req.body.age
        const birthday = req.body.birthday
        const yearStarted = req.body.yearStarted
        const course = req.body.course
        const yearNumber = req.body.yearNumber
        const section = req.body.section
        const currentYear = req.body.currentYear
        const gender = req.body.gender
        const phoneNumber = req.body.phoneNumber
        const telephoneNumber = req.body.telephoneNumber
        const primaryAddress = req.body.primaryAddress
        const province = req.body.province
        const city  = req.body.city
        const villageorbarangay = req.body.villageorbarangay
        const zipcode = req.body.zipcode
        const highschoolName = req.body.highschoolName
        const highschoolAddress = req.body.highschoolAddress
        const highschoolYearGraduated = req.body.highschoolYesarGraduated
        const elementaryName = req.body.elementaryName
        const elementaryAddress = req.body.elementaryAddress
        const elementaryYearGraduated = req.body.elementaryYearGraduated
        const fatherName = req.body.fatherName
        const fatherOccupation = req.body.fatherOccupation
        const motherName = req.body.motherName
        const motherOccupation = req.body.motherOccupation

        const sqlUpdate = ("UPDATE cvsu_students SET studentNumber = ?, lastName = ?,  firstName = ?,  middleName = ?,  email = ?,  age = ?,  birthday = ?,  yearStarted = ?,  course = ?, " +
        "yearNumber = ?,  section = ?,  currentYear = ?,  gender = ?,  phoneNumber = ?,  telephoneNumber = ?,  primaryAddress = ?,  province = ?,  city = ?,  villageorbarangay = ?,  " +
        "zipcode = ?,  highschoolName = ?,  highschoolAddress = ?,  highschoolYearGraduated = ?,  elementaryName = ?,  elementaryAddress = ?,  elementaryYearGraduated = ?,  fatherName = ?, " +
        " fatherOccupation = ?,  motherName = ?,  motherOccupation = ? WHERE id = ?;"
        )

        db.query ,(sqlUpdate, [studentNumber, lastName, firstName, middleName, email , age, birthday, yearStarted, course, yearNumber, section, currentYear, gender, phoneNumber, primaryAddress ,telephoneNumber, province, city, villageorbarangay, zipcode, highschoolName, highschoolAddress, highschoolYearGraduated, elementaryName, elementaryAddress, elementaryYearGraduated, fatherName, fatherOccupation, motherName, motherOccupation, id]
        , (err,result) => {
            if (err) console.log(err);{
      
            }
    
        });
    }); 
   


app.listen(3001, () => {
    console.log("running on port 3001");
}); 