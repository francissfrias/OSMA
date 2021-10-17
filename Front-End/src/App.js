import Topbar from "./compoments/topbar/Topbar";
import Sidebar2 from "./compoments/sidebar/Sidebar2";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StudentList from "./pages/studentlist/StudentList";
import StudentEditPage from "./pages/studenteditpage/StudentEditPage";
import StudentAdd from "./pages/studentAdd/StudentAdd";
import React, { useState } from "react";
import Dashboard from "./pages/dashBoard/Dashboard";
import Login from "./compoments/Login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Axios from "axios";
import NoMatch from "./NoMatch";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  Axios.defaults.withCredentials = true;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login isAuth={isAuth} setIsAuth={setIsAuth} />
        </Route>

        <div>
          <Topbar isAuth={isAuth} setIsAuth={setIsAuth} />
          <div className="container">
            <Sidebar2 />
            <ProtectedRoutes
              path="/Home"
              compoment={Home}
              isAuth={isAuth}
              setIsAuth={setIsAuth}
            />

            <ProtectedRoutes
              path="/studentpage"
              compoment={StudentList}
              isAuth={isAuth}
              setIsAuth={setIsAuth}
            />

            <ProtectedRoutes
              path="/Dashboard"
              compoment={Dashboard}
              isAuth={isAuth}
              setIsAuth={setIsAuth}
            />

            <ProtectedRoutes
              path="/student/edit/:id"
              compoment={StudentEditPage}
              isAuth={isAuth}
              setIsAuth={setIsAuth}
            />
            <ProtectedRoutes
              path="/studentadd"
              compoment={StudentAdd}
              isAuth={isAuth}
              setIsAuth={setIsAuth}
            />
            <ProtectedRoutes
              path="*"
              compoment={NoMatch}
              isAuth={isAuth}
              setIsAuth={setIsAuth}
            />
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
