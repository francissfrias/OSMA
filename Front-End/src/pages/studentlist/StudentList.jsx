import React, { useEffect } from "react";
import "./studentlist.css";
import { DataGrid } from "@material-ui/data-grid";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import "../../App.js";
import Axios from "axios";

export default function StudentList(props) {
  const [studentallList, setstudentList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setstudentList(response.data);
    });
  }, []);

  const deleteReview = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`);
  };

  const columns = [
    { field: "studentNumber", headerName: "Student Number", width: 180 },
    { field: "lastName", headerName: "Last name", width: 200 },
    { field: "firstName", headerName: "First name", width: 200 },
    { field: "middleName", headerName: "Middle initial", width: 170 },

    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
    },
    {
      field: "course",
      headerName: "Course",
      width: 150,
    },
    {
      field: "section",
      headerName: "Section",
      type: "number",
      width: 130,
    },
    {
      field: "currentYear",
      headerName: "Current year level",
      type: "number",
      width: 190,
    },
    {
      field: "details",
      headerName: "Student Details",
      width: 200,
      renderCell: (studentallList) => {
        return (
          <Link
            to={{
              pathname: "/studentview/" + studentallList.id,
            }}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{
                fontSize: "12px",
                backgroundColor: "teal",
                color: "white",
                width: "120px",
              }}
              className="viewgrade"
            >
              View
            </Button>
          </Link>
        );
      },
    },
    {
      field: "editaction",
      headerName: "Edit",
      width: 100,
      renderCell: (studentallList) => {
        return (
          <Link
            to={{
              pathname: "/student/edit/" + studentallList.id,
            }}
          >
            <IconButton
              aria-label="edit"
              className="userlistEdit"
              color="primary"
            >
              <EditIcon />
            </IconButton>
          </Link>
        );
      },
    },

    {
      field: "editdelete",
      headerName: "Delete",
      width: 120,
      renderCell: (studentallList) => {
        return (
          <IconButton
            aria-label="delete"
            className="userlistDelete"
            color="secondary"
            onClick={() => {
              deleteReview(studentallList.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <div className="studentlist">
      <div className="addstudent">
        <Link to={"/studentadd/"} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            style={{
              fontSize: "11px",
              backgroundColor: "teal",
              color: "white",
            }}
            className="userAddupdateButton"
          >
            Add Student
          </Button>
        </Link>
      </div>
      <div style={{ height: "94%", width: "100%" }}>
        <DataGrid
          rows={studentallList}
          disableSelectionOnClick
          columns={columns}
          pageSize={50}
          checkboxSelection
        />
      </div>
    </div>
  );
}
