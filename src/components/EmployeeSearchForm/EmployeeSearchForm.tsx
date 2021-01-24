import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import React, { ChangeEvent, useEffect, useState } from "react";

interface Props {}

const DefaultInputState: Input = {
  input: "",
};

interface Input {
  input: string;
}

const SearchState: SearchType = {
  search: [],
};

interface SearchType {
  search: string[];
}

export const EmployeeSearchForm: React.FC<Props> = () => {
  const testNames = ["James", "Tom", "Elise", "Anna"];
  const [inputState, setinputState] = useState(DefaultInputState);
  const [searchResults, setSearchResults] = useState(SearchState);
  const handleInputChange = (
    eventInput: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setinputState({ input: eventInput.target.value });
  };

  useEffect(() => {
    const results = testNames.filter((person) =>
      person.toLowerCase().includes(inputState.input)
    );
    setSearchResults({ search: results });
  }, [inputState]);
  return (
    <FormControl>
      <TextField
        value={inputState.input}
        onChange={handleInputChange}
        type="text"
        placeholder="Enter a name"
      />
    </FormControl>
  );
};

export default EmployeeSearchForm;
