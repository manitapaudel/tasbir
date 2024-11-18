import { MouseEventHandler, ReactElement } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactElement | string;
  disabled?: boolean;
  size: "xs" | "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "text";
  extraClass?: string;
  title?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const baseStyles =
  "inline-flex items-center justify-center font-medium font-montserrat disabled:cursor-not-allowed rounded transition focus:outline-none focus:ring-2 focus:ring-offset-2";

const variantStyles = {
  primary: "bg-red-800 text-white hover:bg-red-600 focus:ring-red-400",
  secondary:
    "bg-white text-red-800 hover:bg-gray-beige-200 focus:ring-gray-geige-200",
  text: "bg-transparent text-gray-800 hover:text-red-800 disabled:text-gray-400 focus:ring-red-400",
};

const sizeStyles = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const Button = ({
  children,
  disabled = false,
  size,
  variant,
  extraClass,
  title,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        extraClass
      )}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
