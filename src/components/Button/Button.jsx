import { handleRedirect } from "../../utils/appRedirect";

const Button = ({ className, type, text, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`sofia-pro cursor-pointer hover:opacity-85 active:opacity-75 duration-300 ${className}`}
      onClick={handleRedirect}
    >
      {text}
    </button>
  );
};

export default Button;
