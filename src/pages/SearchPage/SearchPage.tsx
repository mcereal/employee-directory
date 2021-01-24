import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { EmployeeInfoModel } from "./EmployeeInfoModel";
import "./SearchPage.css";

interface Props {
  text?: string;
}

const initialState: EmployeeState = {
  employeeList: [],
};

interface EmployeeState {
  employeeList: EmployeeInfoModel[];
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
          ...employees,
          employeeList: [
            {
              gender,
              name: { first, last },
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
  }, [employees]);

  return <div></div>;
};
