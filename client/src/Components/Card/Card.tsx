import { cType, cClass, cMode } from "@/Types/LogIn/types";
import { FC, HTMLProps, ReactNode } from "react";

interface CardProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  cType?: cType;
  cClass?: cClass;
  cMode?: cMode;
}

const Card: FC<CardProps> = ({ children, cType, cClass, cMode }: CardProps) => {
  return <div>{children}</div>;
};

export default Card;
