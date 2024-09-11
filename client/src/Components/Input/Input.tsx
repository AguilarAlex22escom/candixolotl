import { FC } from "react";
import clsx from "clsx";
import TextField from "@mui/material/TextField";
import { styled } from "styled-components";
import InputProps from "@/Interfaces/InputProps";
import { snow, blue, guinda, font } from "@/Styles/defaultStyles";

const Input: FC<InputProps> = ({ ...props }: InputProps) => {
  return (
    <TextField
      required
      defaultValue={""}
      name={props.name}
      label={props.inputLabel}
      variant="standard"
      type={props.isPassword == true ? "password" : props.inputType}
      className={clsx(props.inputClass, props.inputUIMode)}
      {...props.control?.register(props.name)}
      multiline={props.multiline}
      disabled={props.disabled || false}
      sx={props.disabled === false ? {
        "label": {
          color: blue,
          fontFamily: font,
          overflow: "visible",
        },
        "label.Mui-focused": {
          color: snow,
          overflow: "visible",
          fontFamily: font,
        },
        ".MuiInputBase-input": {
          color: snow,
          fontFamily: font,
          overflow: "visible",
        },
        ".MuiInput-underline:after": {
          fontFamily: font,
          borderBottom: `2px solid ${blue}`,
        },
        ".MuiInput-underline:before": {
          borderBottom: `2px solid ${blue}`,
        },
      }
      : {
        visibility: "hidden"
      }}
    />
  );
};

export default Input;
