import { ButtonAppBar } from "./components/ButtonAppBar/ButtonAppBar";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { NoMatch } from "./pages/NoMatch/NoMatch";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { initialState } from "./pages/SearchPage/EmployeeState";

const App: React.FC = () => {
  const [employeeState, setEmployeeState] = useState(initialState);
  return (
    <Router>
      <div>
        <ButtonAppBar></ButtonAppBar>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
