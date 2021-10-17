import React, { useEffect } from "react";
import "./studentlist.css";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import "../../App.js";
import Axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

export default function StudentList(props) {
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <div className="division1"></div>
        <GridToolbarExport
          className="export"
          csvOptions={{ allColumns: true }}
          style={{
            fontSize: "11px",
            backgroundColor: "teal",
            color: "white",
          }}
        />
        <div className="division"></div>
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
      </GridToolbarContainer>
    );
  }
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
  const [fetchData, setFetchData] = useState(true);

  const triggerDataFetch = () => setFetchData((t) => !t);

  const [studentallList, setstudentList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setstudentList(response.data);
    });
  }, [fetchData]);

  const updatec = () => {
    Axios.put("http://localhost:3001/api/updatecourse");
  };
  const deleteReview = (id) => {
    const confirm = window.confirm("Are you sure you want to delete ?");
    if (confirm) {
      Axios.delete(`http://localhost:3001/api/delete/${id}`).then(
        (response) => {
          updatec();
          triggerDataFetch();
          setOpensnack(true);
        }
      );
    }
  };

  const columns = [
    {
      field: "studentNumber",
      headerName: "Student Number",
      width: 195,
    },
    { field: "lastName", headerName: "Last name", width: 200 },
    { field: "firstName", headerName: "First name", width: 240 },
    { field: "middleName", headerName: "Middle initial", width: 200 },

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
      field: "courseandsection",
      headerName: "Course , Section & Year",

      width: 300,
    },
    {
      field: "gender",
      headerName: "Gender",
      hide: true,
      width: 250,
    },
    {
      field: "phoneNumber",
      headerName: "Phone number",
      hide: true,
      width: 250,
    },
    {
      field: "telephoneNumber",
      headerName: "Telephone Number",
      hide: true,
      width: 250,
    },
    {
      field: "primaryAddress",
      headerName: "Primary Address",
      hide: true,
      width: 250,
    },
    {
      field: "province",
      headerName: "Province",
      hide: true,
      width: 250,
    },
    {
      field: "city",
      headerName: "City",
      hide: true,
      width: 250,
    },
    {
      field: "villageorbarangay",
      headerName: "Village/Barangay",
      hide: true,
      width: 250,
    },
    {
      field: "zipcode",
      headerName: "Zipcode",
      hide: true,
      width: 250,
    },
    {
      field: "highschoolName",
      headerName: "Highschool Name",
      hide: true,
      width: 250,
    },
    {
      field: "highschoolAddress",
      headerName: "Highschool Address",
      hide: true,
      width: 250,
    },
    {
      field: "highschoolYearGraduated",
      headerName: "Highschool Year Graduated",
      hide: true,
      width: 250,
    },
    {
      field: "elementaryName",
      headerName: "Elementary Name",
      hide: true,
      width: 250,
    },
    {
      field: "elementaryAddress",
      headerName: "Elementary Address",
      hide: true,
      width: 250,
    },
    {
      field: "elementaryYearGraduated",
      headerName: "Elementary Year Graduated",
      hide: true,
      width: 250,
    },
    {
      field: "fatherName",
      headerName: "Father's Name",
      hide: true,
      width: 250,
    },
    {
      field: "fatherOccupation",
      headerName: "Father's Occupation",
      hide: true,
      width: 250,
    },
    {
      field: "motherName",
      headerName: "Mother's Name",
      hide: true,
      width: 250,
    },
    {
      field: "motherOccupation",
      headerName: "Mother's Occupation",
      hide: true,
      width: 250,
    },
    {
      field: "sibling1",
      headerName: "Sibling1",
      hide: true,
      width: 250,
    },
    {
      field: "sibling2",
      headerName: "Sibling2",
      hide: true,
      width: 250,
    },
    {
      field: "sibling3",
      headerName: "Sibling3",
      hide: true,
      width: 250,
    },
    {
      field: "sibling4",
      headerName: "Sibling4",
      hide: true,
      width: 250,
    },
    {
      field: "sibling5",
      headerName: "Sibling5",
      hide: true,
      width: 250,
    },
    {
      field: "details",
      headerName: "Student Details",
      width: 169,
      filterable: false,
      disableExport: true,
      renderCell: (studentallList) => {
        return (
          <Link
            to={{
              pathname: "/student/edit/" + studentallList.id,
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
              View/Edit
            </Button>
          </Link>
        );
      },
    },
    {
      field: "editdelete",
      headerName: "Delete",
      width: 120,
      filterable: false,
      disableExport: true,
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

  const { data } = studentallList.values({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 20,
  });

  return (
    <div className="studentlist">
      <div className="snackbarss">
        <Snackbar
          open={opensnack}
          autoHideDuration={1000}
          onClose={handleClosesnack}
          style={{ width: "100%" }}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert onClose={handleClosesnack} severity="success">
            Successfully deleted !
          </Alert>
        </Snackbar>
      </div>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={studentallList}
          columns={columns}
          disableSelectionOnClick
          {...data}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </div>
    </div>
  );
}
