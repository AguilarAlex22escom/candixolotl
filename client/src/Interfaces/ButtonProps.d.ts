import { HTMLProps, ReactNode } from "react";
import { buttonType, buttonClass, buttonUIMode } from "@/Types/button";
export default interface ButtonProps implements HTMLProps<HTMLButtonElement>, MUIProps {
  children: ReactNode;
  buttonType?: buttonType;
  buttonClass?: buttonClass;
  buttonUIMode?: buttonUIMode;
  onClick?: () => void;
  onSubmit?: () => void;
  type?: "button" | "reset" | "submit";
}
