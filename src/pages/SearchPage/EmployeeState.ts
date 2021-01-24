import { EmployeeInfoModel } from "./EmployeeInfoModel";

export const initialState: EmployeeState = {
  employeeList: [],
};

interface EmployeeState {
  employeeList: EmployeeInfoModel[];
}

// {
//   gender: "",
//   employeeName: { first: "", last: "" },
//   email: "",
//   picture: { large: "", medium: "", thumbnail: "" },
// },
