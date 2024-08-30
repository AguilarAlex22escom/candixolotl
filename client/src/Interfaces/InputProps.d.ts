import { HTMLProps } from "react";
import {
  inputType,
  inputClass,
  inputUIMode,
  inputLabel,
  isPassword,
} from "@/Types/input";
import { Control, FormState } from "react-hook-form";
import { SignUpData } from "@/Interfaces/SignUpData.d";

export default interface InputProps extends HTMLProps<HTMLInputElement> {
  inputType: inputType;
  inputClass: inputClass;
  inputUIMode: inputUIMode;
  inputLabel?: inputLabel;
  isPassword?: isPassword;
  control?: Control<any>;
  errors?: FormState<SignUpData>;
  name: string;
}
