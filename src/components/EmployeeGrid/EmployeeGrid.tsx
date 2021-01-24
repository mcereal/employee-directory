import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";

interface Props {
  test?: string;
}

const EmployeeGrid: React.FC<Props> = () => {
  const { employeeList } = useContext(EmployeeContext);
  return (
    <div>
      {employeeList.map((employee) => (
        <div key={employee.email}>{employee.name.first}</div>
      ))}
    </div>
  );
};

export default EmployeeGrid;
