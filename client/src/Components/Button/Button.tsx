import { FC } from "react";
import { clsx } from "clsx";
import { Button as MUIButton } from "@mui/material";
import ButtonProps from "@/Interfaces/ButtonProps";

const Button: FC<ButtonProps> = ({ ...props }: ButtonProps) => {
  return (
    <MUIButton
      variant="contained"
      className={clsx(props.buttonType, props.buttonClass, props.buttonUIMode)}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </MUIButton>
  );
};

export default Button;
