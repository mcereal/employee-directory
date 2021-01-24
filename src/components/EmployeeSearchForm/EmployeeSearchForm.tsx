import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import React, { ChangeEvent, useState } from "react";

interface Props {}

const DefaultInputState: Input = {
  input: "",
};

interface Input {
  input: string;
}

export const EmployeeSearchForm: React.FC<Props> = () => {
  const [inputState, setinputState] = useState(DefaultInputState);
  const handleInputChange = (
    eventInput: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setinputState({ input: eventInput.target.value });
  };
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
