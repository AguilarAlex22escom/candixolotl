import { FC } from "react";
import clsx from "clsx";
// import { alpha, styled } from "@mui/material/styles";
import { Card as MUICard } from "@mui/material";
// import { CardProps as MUICardProps } from "@mui/material/Card";
import CardProps from "@/Interfaces/CardProps";
import {
  InformativeStyles,
  SaleStyles,
  SessionStyles,
} from "@/Styles/components/Card";

const Card: FC<CardProps> = ({
  cardType,
  cardClass,
  cardUIMode,
  children,
}: CardProps) => {
  return (
    <MUICard
      sx={
        cardClass == "Informative"
          ? InformativeStyles
          : cardClass == "Sale"
          ? SaleStyles
          : SessionStyles
      }
      className={clsx(cardType, cardClass, cardUIMode)}
    >
      {children}
    </MUICard>
  );
};

export default Card;
