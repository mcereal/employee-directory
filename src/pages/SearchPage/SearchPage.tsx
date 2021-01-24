import React from "react";
import { ButtonAppBar } from "../../components/ButtonAppBar/ButtonAppBar";
import EmployeeGrid from "../../components/EmployeeGrid/EmployeeGrid";
import EmployeeSearchForm from "../../components/EmployeeSearchForm/EmployeeSearchForm";

import "./SearchPage.css";

interface Props {
  text?: string;
}

export const SearchPage: React.FC<Props> = () => {
  return (
    <div>
      <ButtonAppBar />
      <EmployeeSearchForm />
      <EmployeeGrid />
    </div>
  );
};
