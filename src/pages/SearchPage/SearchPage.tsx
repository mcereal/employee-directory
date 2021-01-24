import React, { useEffect, useState } from "react";
import EmployeeGrid from "../../components/EmployeeGrid/EmployeeGrid";
import API from "../../utils/API";
import { initialState } from "./EmployeeState";
import "./SearchPage.css";

interface Props {
  text?: string;
}

export const SearchPage: React.FC<Props> = () => {
  const [employees, setEmployees] = useState(initialState);

  useEffect(() => {
    API.search()
      .then((res) => {
        const { gender, email } = res;
        const { first, last } = res.name;
        const { large, medium, thumbnail } = res.picture;
        setEmployees({
          employeeList: [
            ...employees.employeeList,
            {
              gender,
              employeeName: { first, last },
              email,
              picture: {
                large,
                medium,
                thumbnail,
              },
            },
          ],
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <EmployeeGrid></EmployeeGrid>
      {employees.employeeList.map((employee) => (
        <div key={employee.email}>{employee.employeeName.first}</div>
      ))}
    </div>
  );
};
