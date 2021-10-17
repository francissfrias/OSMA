import React, { useCallback } from "react";
import "./topbar.css";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { useHistory } from "react-router-dom";

export default function Topbar({ isAuth, setIsAuth }) {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/"), [history]);
  Axios.defaults.withCredentials = true;

  const Login = () => {
    Axios.get("http://localhost:3001/api/login").then((response) => {
      localStorage.removeItem("token", response.data.token);
      setIsAuth(false);
      handleOnClick();
    });
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer"></div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/8/80/Cavite_State_University.png"
            alt=""
            className="topAvatar"
          />
          <Button
            variant="contained"
            color="primary"
            style={{
              marginLeft: 10,
              marginRight: 0,
              maxHeight: 25,
              fontSize: 10,
              backgroundColor: "teal",
              marginTop: -5,
            }}
            onClick={Login}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
