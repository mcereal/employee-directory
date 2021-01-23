import React from "react";
import "./NoMatch.css";

// interface Props {
//   text: string;
// }

export const NoMatch: React.FC<any> = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <h1>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </h1>
    </div>
  );
};
