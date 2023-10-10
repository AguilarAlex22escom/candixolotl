import { fType, fClass, fMode } from "@/Types/Form/types";
import { FC, HTMLProps, ReactNode } from "react";

interface FormProps extends HTMLProps<HTMLFormElement> {
  formMethod: "POST" | "GET";
  formTitle: ReactNode;
  children: ReactNode;
  formAction?: string;
  fType?: fType;
  fClass?: fClass;
  fMode?: fMode;
}

const Form: FC<FormProps> = ({
  formMethod,
  formAction,
  formTitle,
  children,
  fType,
  fClass,
  fMode,
}) => {
  return (
    <form method={formMethod} action={formAction}>
      <legend>{formTitle}</legend>
      {children}
    </form>
  );
};

export default Form;
