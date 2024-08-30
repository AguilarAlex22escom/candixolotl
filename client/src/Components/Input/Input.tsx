import { FC } from "react";
import clsx from "clsx";
import TextField from "@mui/material/TextField";
import InputProps from "@/Interfaces/InputProps";

const Input: FC<InputProps> = ({ ...props }: InputProps) => {
  return (
    <TextField
      required
      defaultValue={""}
      name={props.name}
      label={props.inputLabel}
      type={props.isPassword == true ? "password" : props.inputType}
      className={clsx(props.inputClass, props.inputUIMode)}
      {...props.control?.register(props.name)}
    />
  );
};

export default Input;
