import { ReactNode } from "react";

export default interface HRTagProps {
  firstChildren?: ReactNode;
  lastChildren?: ReactNode;
  hrUIMode?: "Light" | "Dark";
}