import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Axios from "axios";
import { DataGrid } from "@material-ui/data-grid";

export default function Dashboard() {
  let time = new Date().toLocaleTimeString();

  const [ctime, setctime] = useState("");

  const updatetime = () => {
    time = new Date().toLocaleTimeString();
    setctime(time);
  };

  setInterval(updatetime, 1000);

  let date = new Date().toDateString();

  const [cdate, setcdate] = useState("");

  const updateDate = () => {
    date = new Date().toDateString();
    setcdate(date);
  };

  setInterval(updateDate, 1000);

  const [totalstudents, settotalstudents] = useState([]);
  const [recent, setrecent] = useState([]);

  const [bsee, setbsee] = useState([]);
  const [bsse, setbsse] = useState([]);
  const [bsbsm, setbsbsm] = useState([]);
  const [bscs, setbscs] = useState([]);
  const [bshm, setbshm] = useState([]);
  const [bsit, setbsit] = useState([]);
  const [bspsych, setbspsych] = useState([]);
  const [bstm, setbstm] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      settotalstudents(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/totalbsee").then((response) => {
      setbsee(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/totalbsse").then((response) => {
      setbsse(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/totalbsbm").then((response) => {
      setbsbsm(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/totalbscs").then((response) => {
      setbscs(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/totalbshm").then((response) => {
      setbshm(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/totalbsit").then((response) => {
      setbsit(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/totalbspsych").then((response) => {
      setbspsych(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/totalbstm").then((response) => {
      setbstm(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/recentlyadded").then((response) => {
      setrecent(response.data);
    });
  }, []);

  const columns = [
    { field: "studentNumber", headerName: "Student Number", width: 200 },
    { field: "lastName", headerName: "Last name", width: 200 },
    { field: "firstName", headerName: "First name", width: 250 },
    { field: "middleName", headerName: "Middle initial", width: 170 },

    {
      field: "course",
      headerName: "Course",
      width: 150,
    },
    {
      field: "currentYear",
      headerName: "Current year level",
      type: "number",
      width: 190,
    },
  ];
  return (
    <div className="Dashboard">
      <div className="spacer">
        <div className="time">
          <span className="timed">{ctime}</span>
          <span className="timed2">{cdate}</span>
        </div>
      </div>
      <div className="dash">
        <div className="category1">
          <div className="recentlyadded">
            <span className="rad">Recently Added Students</span>{" "}
            <DataGrid
              className="data"
              style={{ height: "87.3%", width: "100%" }}
              rows={recent}
              columns={columns}
              pageSize={5}
              hideFooter={true}
              disableSelectionOnClick
              disableColumnFilter
              disableColumnMenu
              disableColumnSelector
              disableDensitySelector
            />
          </div>
        </div>
        <div className="category3">
          <div className="bsee">
            <h3>BSEE Course</h3>
            <br></br> <br></br>
            <h3>{bsee.length}</h3>{" "}
          </div>
          <div className="bsse">
            <h3>BSSE Course</h3>
            <br></br>
            <br></br>
            <h3>{bsse.length}</h3>
          </div>

          <div className="bsbm">
            <h3>BSBM Course</h3>
            <br></br>
            <br></br> <h3>{bsbsm.length}</h3>
          </div>
          <div className="bscs">
            <h3>BSCS Course</h3>
            <br></br> <br></br>
            <h3>{bscs.length}</h3>
          </div>

          <div className="bshm">
            <h3>BSHM Course</h3>
            <br></br>
            <br></br> <h3>{bshm.length}</h3>
          </div>
          <div className="bsit">
            <h3>BSIT Course</h3>
            <br></br> <br></br>
            <h3>{bsit.length}</h3>
          </div>
          <div className="bspsych">
            <h3>BSPSYCH Course</h3>
            <br></br>
            <br></br>
            <h3>{bspsych.length}</h3>
          </div>
          <div className="bstm">
            <h3>BSTM Course</h3>
            <br></br> <br></br>
            <h3>{bstm.length}</h3>
          </div>
          <div className="totalstudents">
            <h3>Total students</h3>
            <br></br>
            <br></br>
            <h3>{totalstudents.length}</h3> <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}
