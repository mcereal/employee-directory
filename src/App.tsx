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
    try {
      const getEmployeeInfo = async () => {
        const employeeInfoResponse = await API.getRandomEmployeeInfo();
        setEmployees({
          ...employees,
          employeeList: employeeInfoResponse.map(
            (employee: EmployeeInfoModel) => {
              const { gender, email } = employee;
              const { first, last } = employee.name;
              const { large, medium, thumbnail } = employee.picture;
              return {
                gender,
                name: { first, last },
                email,
                picture: {
                  large,
                  medium,
                  thumbnail,
                },
              };
            }
          ),
        });
      };
      getEmployeeInfo();
    } catch (error) {
      console.log(error);
    }
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
