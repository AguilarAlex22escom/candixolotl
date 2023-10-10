import { buttonType, buttonClass, buttonMode } from "@/Types/Button/types";
import React, { FC, HTMLProps, ReactNode } from "react";
import { clsx } from "clsx";


interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  bType?: buttonType;
  bClass?: buttonClass;
  bMode?: buttonMode;
}

const Button: FC<ButtonProps> = ({
  bType,
  bClass,
  bMode,
  children,
}: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;