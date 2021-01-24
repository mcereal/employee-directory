import React, { useEffect, useState } from "react";
import { ButtonAppBar } from "../../components/ButtonAppBar/ButtonAppBar";
import EmployeeGrid from "../../components/EmployeeGrid/EmployeeGrid";
import API from "../../utils/API";
import EmployeeContext from "../../utils/EmployeeContext";
import { initialState } from "./EmployeeState";
import "./SearchPage.css";

interface Props {
  text?: string;
}

export const SearchPage: React.FC<Props> = () => {
  const [employees, setEmployees] = useState(initialState);

  useEffect(() => {
    API.search(4)
      .then((res) => {
        res.forEach((employee) => {
          const { gender, email } = employee;
          const { first, last } = employee.name;
          const { large, medium, thumbnail } = employee.picture;
          const newEmployee = employees.employeeList;
          newEmployee.push({
            gender,
            employeeName: { first, last },
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
    <EmployeeContext.Provider value={employees}>
      <div>
        <ButtonAppBar />
        <EmployeeGrid />
      </div>
    </EmployeeContext.Provider>
  );
};
