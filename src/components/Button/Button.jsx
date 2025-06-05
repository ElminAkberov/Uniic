import React from "react";
import { handleRedirect } from "../../utils/appRedirect";

const Button = ({ className, text }) => {
  return (
    <button
      className={`sofia-pro cursor-pointer hover:opacity-85 active:opacity-75 duration-300 ${className}`}
      onClick={handleRedirect}
    >
      {text}
    </button>
  );
};

export default Button;
