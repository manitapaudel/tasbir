import { MouseEventHandler, ReactElement } from "react";

type ButtonProps = {
  label: string;
  disabled: boolean;
  Icon: ReactElement;
  iconPosition: "start" | "end";
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  label,
  disabled = false,
  Icon,
  iconPosition,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`flex ${
        iconPosition === "end" ? "flex-row-reverse" : ""
      } items-center font-montserrat disabled:cursor-not-allowed hover:text-gallery-dark`}
      onClick={onClick}
    >
      {Icon} <span className="font-medium mb-0.5">{label}</span>
    </button>
  );
};

export default Button;
