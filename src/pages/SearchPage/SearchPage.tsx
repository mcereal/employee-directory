import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { ButtonAppBar } from "../../components/ButtonAppBar/ButtonAppBar";
import EmployeeGrid from "../../components/EmployeeGrid/EmployeeGrid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

import "./SearchPage.css";
import { initialState } from "./EmployeeState";
import EmployeeContext from "../../utils/EmployeeContext";

interface Props {
  text?: string;
}
const DefaultInputState: Input = {
  input: "",
};

interface Input {
  input: string;
}

export const SearchPage: React.FC<Props> = () => {
  const [inputState, setinputState] = useState(DefaultInputState);
  const [searchResults, setSearchResults] = useState(initialState);
  const { employeeList } = useContext(EmployeeContext);
  const handleInputChange = (
    eventInput: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setinputState({ input: eventInput.target.value.toLowerCase() });
  };

  useEffect(() => {
    const results = employeeList.filter((person) =>
      person.name.first.toLowerCase().includes(inputState.input)
    );
    setSearchResults({ employeeList: results });
  }, [inputState]);
  return (
    <div>
      <EmployeeContext.Provider value={searchResults}>
        <ButtonAppBar />
        <FormControl>
          <TextField
            value={inputState.input}
            onChange={handleInputChange}
            type="text"
            placeholder="Enter a name"
          />
        </FormControl>
        <EmployeeGrid />
      </EmployeeContext.Provider>
    </div>
  );
};
