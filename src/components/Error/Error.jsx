import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-alert">
        <div className="error-alert-text">
          Sorry, no products match your filter search ... Clear the filter and try again 😀.
        </div>
      </div>
    </div>
  );
};

export default Error;
