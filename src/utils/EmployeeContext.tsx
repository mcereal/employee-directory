import React from "react";
import { initialState } from "../pages/SearchPage/EmployeeState";

const EmployeeContext = React.createContext(initialState);

export default EmployeeContext;
