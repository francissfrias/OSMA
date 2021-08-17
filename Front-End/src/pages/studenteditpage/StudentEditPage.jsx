import React, { useState, useEffect } from "react";
import "./studenteditpage.css";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Avatar from "@material-ui/core/Avatar";
import GetAppIcon from "@material-ui/icons/GetApp";
import "../../App.js";
import Axios from "axios";
import { useParams } from "react-router-dom";

const upload = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(0),
    },
  },
  input: {
    display: "none",
  },
}));

const avatarStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      height: "100px",
      width: "100px",
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const selectStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    width: 300,
  },
}));

export default function StudentEditPage(props) {
  let { id } = useParams();

  const [studentNumber, setStudentNumber] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [birthday, setbirthday] = useState("");
  const [yearStarted, setyearStarted] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [telephoneNumber, settelephoneNumber] = useState("");
  const [primaryAddress, setprimaryAddress] = useState("");
  const [province, setprovince] = useState("");
  const [city, setcity] = useState("");
  const [villageorbarangay, setvillageorbarangay] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [highschoolName, sethighschoolName] = useState("");
  const [highschoolAddress, sethighschoolAddress] = useState("");
  const [highschoolYearGraduated, sethighschoolYearGraduated] = useState("");
  const [elementaryName, setelementaryName] = useState("");
  const [elementaryAddress, setelementaryAddress] = useState("");
  const [elementaryYearGraduated, setelementaryYearGraduated] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [fatherOccupation, setfatherOccupation] = useState("");
  const [motherName, setmotherName] = useState("");
  const [motherOccupation, setmotherOccupation] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/" + id).then((response) => {
      const { lastName, middleName } = response.data[0];

      setmiddleName(middleName);
      setLastName(lastName);
    });
  }, [id]);

  const updateReview = () => {
    Axios.put(`http://localhost:3001/api/update/${id}`, {
      lastName,
      middleName,
    }).then((res) => {
      console.log(res);
    });
  };

  const uploadclass = upload();

  const sectionclass = selectStyles();
  const [section, setsection] = React.useState("");
  const sectionChange = (event) => {
    setsection(event.target.value);
  };

  const yearclass = selectStyles();
  const [yearNumber, setyearNumber] = useState("");
  const yearChange = (event) => {
    setyearNumber(event.target.value);
  };
  const courseclass = selectStyles();
  const [course, setcourse] = useState("");
  const courseChange = (event) => {
    setcourse(event.target.value);
  };

  const currentyearclass = selectStyles();
  const [currentYear, setcurrentYear] = useState("");
  const currentyearChange = (event) => {
    setcurrentYear(event.target.value);
  };

  const genderclass = selectStyles();
  const [gender, setgender] = useState("");
  const genderChange = (event) => {
    setgender(event.target.value);
  };

  const classes = useStyles();
  const avatar = avatarStyle();

  return (
    <div className="studenteditpage">
      <div className="userContainer">
        <div className="userUpdate">
          <div className="avatarpos">
            <div className={avatar.root}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
              />

              <div className="uploadcsssss">
                <input
                  accept="image/*"
                  className={uploadclass.input}
                  id="icon-button-file"
                  type="file"
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    className="uploadcss"
                    aria-label="upload picture"
                    component="span"
                  >
                    <GetAppIcon className="asdf" />
                  </IconButton>
                </label>{" "}
              </div>
            </div>
          </div>
          <div className="namecss">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="firstName"
                type="name"
                label="First Name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="middleName"
                label="Middle Initial"
                value={middleName || ""}
                onChange={(e) => {
                  setmiddleName(e.target.value);
                }}
              />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                label="Last Name"
                value={lastName || ""}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />{" "}
            </form>
          </div>

          <div className="namecss2">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                type="name"
                label="Student Number"
                onChange={(e) => {
                  setStudentNumber(e.target.value);
                }}
              />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="stan  dard-basic"
                type="email"
                label="Email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />{" "}
            </form>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                type="number"
                label="Age"
                onChange={(e) => {
                  setage(e.target.value);
                }}
              />{" "}
            </form>
          </div>

          <div className="basicbday">
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  setbirthday(e.target.value);
                }}
              />
            </form>

            <form
              className={classes.container}
              style={{ marginTop: "20px" }}
              noValidate
            >
              <TextField
                id="date"
                label="Year Started"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  setyearStarted(e.target.value);
                }}
              />
            </form>
          </div>

          <div className="basicinfocss">
            <FormControl className={courseclass.formControl}>
              <InputLabel id="courseSelect">Course</InputLabel>
              <Select
                labelId="courseSelect"
                id="courseSelect"
                value={course}
                onChange={courseChange}
              >
                <MenuItem value={"BSIT"}>BSIT</MenuItem>
                <MenuItem value={"BSCS"}>BSCS</MenuItem>
                <MenuItem value={"BSBM"}>BSBM</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={yearclass.formControl}>
              <InputLabel id="year">Year</InputLabel>
              <Select
                labelId="year"
                id="yeaR"
                value={yearNumber}
                onChange={yearChange}
              >
                <MenuItem value={"1st Year"}>1st Year</MenuItem>
                <MenuItem value={"2nd Year"}>2nd Year</MenuItem>
                <MenuItem value={"3rd Year"}>3rd Year</MenuItem>
                <MenuItem value={"4th Year"}>4th Year</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="basicinfocss2">
            <FormControl className={sectionclass.formControl}>
              <InputLabel id="section">Section</InputLabel>
              <Select
                labelId="section"
                id="sectioN"
                value={section}
                onChange={sectionChange}
              >
                <MenuItem value={"A"}>A</MenuItem>
                <MenuItem value={"B"}>B</MenuItem>
                <MenuItem value={"C"}>C</MenuItem>
                <MenuItem value={"D"}>D</MenuItem>
                <MenuItem value={"E"}>E</MenuItem>
                <MenuItem value={"F"}>F</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={currentyearclass.formControl}>
              <InputLabel id="currentyear">Current Year Level</InputLabel>
              <Select
                labelId="currentyear"
                id="currentyear"
                value={currentYear}
                onChange={currentyearChange}
              >
                <MenuItem value={"1st Year"}>1st Year</MenuItem>
                <MenuItem value={"2nd Year"}>2nd Year</MenuItem>
                <MenuItem value={"3rd Year"}>3rd Year</MenuItem>
                <MenuItem value={"4th Year"}>4th Year</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>

      <div className="semesterselector"></div>

      <div className="userotherinfoContainer">
        <div className="schoolinfo">
          <FormControl className={genderclass.formControl}>
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              labelId="gender"
              id="gender"
              value={gender}
              onChange={genderChange}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Undecided"}>Undecided</MenuItem>
              <MenuItem value={"No Comment"}>No Comment</MenuItem>
            </Select>
          </FormControl>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Phone Number"
              onChange={(e) => {
                setphoneNumber(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Telephone Number"
              onChange={(e) => {
                settelephoneNumber(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Primary Address"
              onChange={(e) => {
                setprimaryAddress(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Province"
              onChange={(e) => {
                setprovince(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="City"
              onChange={(e) => {
                setcity(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Village/Barangay"
              onChange={(e) => {
                setvillageorbarangay(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Zip Code"
              onChange={(e) => {
                setzipcode(e.target.value);
              }}
            />
          </form>
        </div>

        <div className="otherinfo">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Highschool Name"
              onChange={(e) => {
                sethighschoolName(e.target.value);
              }}
            />
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Highschool Address"
              onChange={(e) => {
                sethighschoolAddress(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Year Graduated:"
              onChange={(e) => {
                sethighschoolYearGraduated(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Elementary School Name"
              onChange={(e) => {
                setelementaryName(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              style={{ width: 250 }}
              label="Elementary School Address"
              onChange={(e) => {
                setelementaryAddress(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Year Graduated:"
              onChange={(e) => {
                setelementaryYearGraduated(e.target.value);
              }}
            />
          </form>
        </div>

        <div className="infoinfo">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Father's Name: "
              onChange={(e) => {
                setfatherName(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Father's Occupation"
              onChange={(e) => {
                setfatherOccupation(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Mother's Name"
              onChange={(e) => {
                setmotherName(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Mother's Occupation"
              onChange={(e) => {
                setmotherOccupation(e.target.value);
              }}
            />
          </form>
        </div>
      </div>

      <div className="userupdatebutton">
        <Button
          variant="contained"
          color="primary"
          style={{ fontSize: "12px", backgroundColor: "teal" }}
          className="userAddButton"
          onClick={updateReview}
        >
          Update
        </Button>
      </div>
    </div>
  );
}
