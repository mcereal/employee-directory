import React, { useEffect } from "react";
import API from "../../utils/API";
import "./SearchPage.css";

interface Props {
  text?: string;
}

export const SearchPage: React.FC<Props> = () => {
  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    API.search()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return <div>test</div>;
};
