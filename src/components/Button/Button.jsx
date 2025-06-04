import React from "react";

const Button = ({ className, text }) => {
  return (
    <button className={`sofia-pro cursor-pointer hover:opacity-85 active:opacity-75 duration-300 ${className}`}>{text}</button>
  );
};

export default Button;
