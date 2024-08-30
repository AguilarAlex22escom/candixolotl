import { HTMLProps, ReactNode } from "react";
import { cardType, cardClass, cardUIMode } from "@/Types/card";

export default interface CardProps implements HTMLProps<HTMLDivProps> {
  children: ReactNode;
  cardType?: cardType;
  cardClass?: cardClass;
  cardUIMode?: cardUIMode;
}
