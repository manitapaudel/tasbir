import { ReactElement } from "react";

type ButtonProps = {
  label: string;
  disabled: boolean;
  Icon: ReactElement;
  iconPosition: "start" | "end";
};

const Button = ({
  label,
  disabled = false,
  Icon,
  iconPosition,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`flex ${
        iconPosition === "end" ? "flex-row-reverse" : ""
      } items-center disabled:cursor-not-allowed`}
    >
      {Icon} <span className="font-medium mb-0.5">{label}</span>
    </button>
  );
};

export default Button;
