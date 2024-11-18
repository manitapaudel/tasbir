import { MouseEventHandler, ReactElement } from "react";

type ButtonProps = {
  children: ReactElement | string;
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, disabled = false, onClick }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`flex items-center font-montserrat disabled:cursor-not-allowed hover:text-red-800 disabled:text-black`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
