import { FC } from "react";
import { clsx } from "clsx";
import { Button as MUIButton } from "@mui/material";
import ButtonProps from "@/Interfaces/ButtonProps";
import { SaleStyles, OperationStyles, BuyStyles, TurnBackStyles, StyledMessageButton } from "@/Styles/components/Button";

const Button: FC<ButtonProps> = ({ ...props }: ButtonProps) => {
  return (
    <MUIButton
      sx={
        props.buttonClass == "Sale"
          ? SaleStyles
          : props.buttonClass == "Operation"
          ? OperationStyles
          : props.buttonType == "Buy"
          ? BuyStyles
          : props.buttonType == "Turn back"
          ? TurnBackStyles
          : props.buttonType == "WhatsApp"
          ? StyledMessageButton
          : { backgroundColor: "green" }
      }
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
