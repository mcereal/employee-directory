import { EmployeeInfoModel } from "./EmployeeInfoModel";

export const initialState: EmployeeState = {
  employeeList: [],
};

interface EmployeeState {
  employeeList: EmployeeInfoModel[];
}
