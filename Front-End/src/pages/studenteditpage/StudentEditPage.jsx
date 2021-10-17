import React, { useState, useEffect } from "react";
import "./studenteditpage.css";
// import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import Avatar from "@material-ui/core/Avatar";
// import GetAppIcon from "@material-ui/icons/GetApp";
import "../../App.js";
import Axios from "axios";
import { useParams } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Switch from "@material-ui/core/Switch";

// const upload = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     "& > *": {
//       margin: theme.spacing(0),
//     },
//   },
//   input: {
//     display: "none",
//   },
// }));

// const avatarStyle = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(0),
//       height: "100px",
//       width: "100px",
//     },
//   },
// }));

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
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const [toggled, settoggled] = React.useState({ disable: true });
  const [textchange, settextchange] = useState("View Mode");

  const handlechangedisable = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      settoggled({
        disabled: false,
      });
    } else {
      settoggled({ disable: true });
    }
    if (event.target.checked) {
      settextchange("Edit Mode");
    } else {
      settextchange("View Mode");
    }
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [opensnack, setOpensnack] = React.useState(false);

  const handleClosesnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpensnack(false);
  };

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
  const [sibling1, setsibling1] = useState("");
  const [sibling2, setsibling2] = useState("");
  const [sibling3, setsibling3] = useState("");
  const [sibling4, setsibling4] = useState("");
  const [sibling5, setsibling5] = useState("");
  const [fetchData, setFetchData] = useState(true);

  const triggerDataFetch = () => setFetchData((t) => !t);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get");
  }, [fetchData]);

  const updatec = () => {
    Axios.put("http://localhost:3001/api/updatecourse");
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/" + id).then((response) => {
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
      } = response.data[0];

      setStudentNumber(studentNumber);
      setLastName(lastName);
      setFirstName(firstName);
      setmiddleName(middleName);
      setemail(email);
      setage(age);
      setbirthday(birthday);
      setyearStarted(yearStarted);
      setcourse(course);
      setyearNumber(yearNumber);
      setsection(section);
      setcurrentYear(currentYear);
      setgender(gender);
      setphoneNumber(phoneNumber);
      settelephoneNumber(telephoneNumber);
      setprimaryAddress(primaryAddress);
      setprovince(province);
      setcity(city);
      setvillageorbarangay(villageorbarangay);
      setzipcode(zipcode);
      sethighschoolName(highschoolName);
      sethighschoolAddress(highschoolAddress);
      sethighschoolYearGraduated(highschoolYearGraduated);
      setelementaryName(elementaryName);
      setelementaryAddress(elementaryAddress);
      setelementaryYearGraduated(elementaryYearGraduated);
      setfatherName(fatherName);
      setfatherOccupation(fatherOccupation);
      setmotherName(motherName);
      setmotherOccupation(motherOccupation);
      setsibling1(sibling1);
      setsibling2(sibling2);
      setsibling3(sibling3);
      setsibling4(sibling4);
      setsibling5(sibling5);
    });
  }, [id]);

  const updateReview = () => {
    Axios.put(`http://localhost:3001/api/update/${id}`, {
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
    }).then((res) => {
      console.log(res);
      updatec();
      triggerDataFetch();
      setOpensnack(true);
    });
  };

  // const uploadclass = upload();

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
  // const avatar = avatarStyle();

  return (
    <div className="studenteditpage">
      <span className="studenttitle">Student Information</span>
      <div className="userContainer">
        <div className="userUpdate">
          {/* <div className="avatarpos">
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
          </div> */}
          <div className="namecss">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                disabled={toggled.disable}
                id="firstName"
                type="name"
                label="First Name"
                value={firstName || ""}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                disabled={toggled.disable}
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
                disabled={toggled.disable}
                id="lastName"
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
                disabled={toggled.disable}
                id="standard-basic"
                type="name"
                label="Student Number"
                value={studentNumber || ""}
                onChange={(e) => {
                  setStudentNumber(e.target.value);
                }}
              />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                disabled={toggled.disable}
                id="stan  dard-basic"
                type="email"
                label="Email"
                value={email || ""}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />{" "}
            </form>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                disabled={toggled.disable}
                id="standard-basic"
                type="number"
                label="Age"
                value={age || ""}
                onChange={(e) => {
                  setage(e.target.value);
                }}
              />{" "}
            </form>
          </div>

          <div className="basicbday">
            <form className={classes.container} noValidate>
              <TextField
                disabled={toggled.disable}
                id="date"
                label="Birthday"
                type="date"
                value={birthday}
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
                disabled={toggled.disable}
                id="date"
                label="Year Started"
                type="date"
                value={yearStarted}
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
            <FormControl
              className={courseclass.formControl}
              disabled={toggled.disable}
            >
              <InputLabel id="courseSelect">Course</InputLabel>
              <Select
                labelId="courseSelect"
                id="courseSelect"
                value={course}
                onChange={courseChange}
              >
                <MenuItem value={"BSEE"}>
                  Bachelor of Elementary Education
                </MenuItem>
                <MenuItem value={"BSSE"}>
                  Bachelor of Secondary Education
                </MenuItem>
                <MenuItem value={"BSBM"}>BS Business Management</MenuItem>
                <MenuItem value={"BSCS"}>BS Computer Science</MenuItem>
                <MenuItem value={"BSHM"}>BS Hospitality Management</MenuItem>
                <MenuItem value={"BSIT"}>BS Information Technology</MenuItem>
                <MenuItem value={"BSPSYCH"}>BS Psychology</MenuItem>
                <MenuItem value={"BSTM"}>BS Tourism Management</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              className={yearclass.formControl}
              disabled={toggled.disable}
            >
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
            <FormControl
              className={sectionclass.formControl}
              disabled={toggled.disable}
            >
              <InputLabel id="section">Section</InputLabel>
              <Select
                className="disableselect"
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

            <FormControl
              className={currentyearclass.formControl}
              disabled={toggled.disable}
            >
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

      <span className="schoolinfotitle">Basic Information</span>

      <div className="schoolinfo">
        <FormControl
          className={genderclass.formControl}
          disabled={toggled.disable}
        >
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
            disabled={toggled.disable}
            id="standard-basic"
            type="name"
            label="Phone Number"
            value={phoneNumber || ""}
            onChange={(e) => {
              setphoneNumber(e.target.value);
            }}
          />
        </form>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            disabled={toggled.disable}
            id="standard-basic"
            type="name"
            label="Telephone Number"
            value={telephoneNumber || ""}
            onChange={(e) => {
              settelephoneNumber(e.target.value);
            }}
          />
        </form>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            disabled={toggled.disable}
            id="standard-basic"
            type="name"
            label="Primary Address"
            value={primaryAddress || ""}
            onChange={(e) => {
              setprimaryAddress(e.target.value);
            }}
          />
        </form>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            disabled={toggled.disable}
            id="standard-basic"
            type="name"
            label="Province"
            value={province || ""}
            onChange={(e) => {
              setprovince(e.target.value);
            }}
          />
        </form>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            disabled={toggled.disable}
            id="standard-basic"
            type="name"
            label="City"
            value={city || ""}
            onChange={(e) => {
              setcity(e.target.value);
            }}
          />
        </form>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            disabled={toggled.disable}
            id="standard-basic"
            type="name"
            label="Village/Barangay"
            value={villageorbarangay || ""}
            onChange={(e) => {
              setvillageorbarangay(e.target.value);
            }}
          />
        </form>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            disabled={toggled.disable}
            id="standard-basic"
            type="name"
            label="Zip Code"
            value={zipcode || ""}
            onChange={(e) => {
              setzipcode(e.target.value);
            }}
          />
        </form>
      </div>

      <span className="SchoolAttented">School Attended</span>
      <div className="otherinfo">
        <div className="highscoo">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              disabled={toggled.disable}
              id="standard-basic"
              type="name"
              label="Highschool Name"
              value={highschoolName || ""}
              onChange={(e) => {
                sethighschoolName(e.target.value);
              }}
            />
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              disabled={toggled.disable}
              id="standard-basic"
              type="name"
              label="Highschool Address"
              value={highschoolAddress || ""}
              onChange={(e) => {
                sethighschoolAddress(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              disabled={toggled.disable}
              id="standard-basic"
              type="name"
              label="Year Graduated:"
              value={highschoolYearGraduated || ""}
              onChange={(e) => {
                sethighschoolYearGraduated(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="elementary">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              disabled={toggled.disable}
              id="standard-basic"
              type="name"
              label="Elementary School Name"
              value={elementaryName || ""}
              onChange={(e) => {
                setelementaryName(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              disabled={toggled.disable}
              id="standard-basic"
              type="name"
              style={{ width: 250 }}
              label="Elementary School Address"
              value={elementaryAddress || ""}
              onChange={(e) => {
                setelementaryAddress(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              disabled={toggled.disable}
              id="standard-basic"
              type="name"
              label="Year Graduated:"
              value={elementaryYearGraduated || ""}
              onChange={(e) => {
                setelementaryYearGraduated(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
      <span className="family">Family Information</span>
      <div className="infoinfo">
        <div className="father">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              disabled={toggled.disable}
              id="standard-basic"
              type="name"
              label="Father's Name: "
              value={fatherName || ""}
              onChange={(e) => {
                setfatherName(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              disabled={toggled.disable}
              id="standard-basic"
              type="name"
              label="Father's Occupation"
              value={fatherOccupation || ""}
              onChange={(e) => {
                setfatherOccupation(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="mother">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              disabled={toggled.disable}
              id="standard-basic"
              type="name"
              label="Mother's Name"
              value={motherName || ""}
              onChange={(e) => {
                setmotherName(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              disabled={toggled.disable}
              id="standard-basic"
              type="name"
              label="Mother's Occupation"
              value={motherOccupation || ""}
              onChange={(e) => {
                setmotherOccupation(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="siblings">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Sibling #1"
              disabled={toggled.disable}
              value={sibling1 || ""}
              onChange={(e) => {
                setsibling1(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Sibling #2"
              disabled={toggled.disable}
              value={sibling2 || ""}
              onChange={(e) => {
                setsibling2(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Sibling #3"
              disabled={toggled.disable}
              value={sibling3 || ""}
              onChange={(e) => {
                setsibling3(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Sibling #4"
              disabled={toggled.disable}
              value={sibling4 || ""}
              onChange={(e) => {
                setsibling4(e.target.value);
              }}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              type="name"
              label="Sibling #5"
              disabled={toggled.disable}
              value={sibling5 || ""}
              onChange={(e) => {
                setsibling5(e.target.value);
              }}
            />
          </form>
        </div>
      </div>

      <div className="tchnage">
        <h1 className="textchangecss">{textchange}</h1>
      </div>
      <div className="alignbottom">
        <div className="togglebutton">
          <Switch
            checked={state.checkedB}
            onChange={handlechangedisable}
            color="default"
            name="checkedB"
            style={{ color: "teal" }}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
        <div>
          <Button
            disabled={toggled.disable}
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
      <div className="snackbarss">
        <Snackbar
          open={opensnack}
          autoHideDuration={1000}
          onClose={handleClosesnack}
          style={{ width: "100%" }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={handleClosesnack} severity="success">
            Successfully Updated !
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
