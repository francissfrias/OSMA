import React, { useState, useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./login.css";
import Axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login({ setIsAuth, props }) {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/Home"), [history]);
  const direct = () => {
    Axios.get("http://localhost:3001/api/login").then((response) => {
      if (response.data.loggedIn === true) {
        setIsAuth(true);
        handleOnClick();
      }
    });
  };

  const Login = () => {
    Axios.post("http://localhost:3001/api/login", {
      password: password,
    }).then((res) => {
      if (!res.data.auth) {
        setloginstatus(res.data.message);
      } else {
        localStorage.setItem("token", res.data.token);
        direct();
      }
    });
  };

  Axios.defaults.withCredentials = true;

  const [password, setpassword] = useState("");
  const [loginstatus, setloginstatus] = useState("");

  return (
    <div className="Login">
      <div className="formlogin">
        <span className="logintitle">
          <h1>Login</h1>
        </span>
        <span className="logiadmintitle">
          <h3>Admin</h3>
        </span>{" "}
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          style={{ margin: 25 }}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{
            margin: 25,
            minWidth: 200,
            maxWidth: 250,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
          }}
          onClick={Login}
        >
          Sign In
        </Button>
        <span className="status">{loginstatus}</span>
        {/* <span className="forgotpassword">Forgot password ?</span> */}
      </div>
    </div>
  );
}
