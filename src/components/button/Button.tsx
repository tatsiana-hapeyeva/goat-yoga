import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  size?: "small" | "large";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  size = "large",
  type = "button",
  ...props
}: ButtonProps) {
  const classes = ["button", `button--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
