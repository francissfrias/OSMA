import Topbar from "./compoments/topbar/Topbar";
import Sidebar2 from "./compoments/sidebar/Sidebar2";
import "./app.css";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StudentList from "./pages/studentlist/StudentList";
import StudentEditPage from "./pages/studenteditpage/StudentEditPage";
import StudentAdd from "./pages/studentAdd/StudentAdd";
import StudentView from "./pages/studentView/StudentView";
import React from "react";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar2 />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/studentpage">
            <StudentList />
          </Route>

          <Route path="/student/:id">
            <StudentEditPage />
          </Route>

          <Route path="/studentadd">
            <StudentAdd />
          </Route>

          <Route path="/studentview">
            <StudentView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
