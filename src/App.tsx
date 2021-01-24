import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { NoMatch } from "./pages/NoMatch/NoMatch";
import { EmployeeInfoModel } from "./pages/SearchPage/EmployeeInfoModel";
import { initialState } from "./pages/SearchPage/EmployeeState";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import API from "./utils/API";
import EmployeeContext from "./utils/EmployeeContext";

const App: React.FC = () => {
  const [employees, setEmployees] = useState(initialState);

  useEffect(() => {
    API.getRandomEmployeeInfo()
      .then((res) => {
        res.forEach((employee: EmployeeInfoModel) => {
          const { gender, email } = employee;
          const { first, last } = employee.name;
          const { large, medium, thumbnail } = employee.picture;
          const newEmployee = employees.employeeList;
          newEmployee.push({
            gender,
            name: { first, last },
            email,
            picture: {
              large,
              medium,
              thumbnail,
            },
          });

          setEmployees({
            ...employees,
            employeeList: newEmployee,
          });
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Router>
      <EmployeeContext.Provider value={employees}>
        <div>
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </EmployeeContext.Provider>
    </Router>
  );
};

export default App;
