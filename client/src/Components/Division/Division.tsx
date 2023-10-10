import { FC, HTMLProps, ReactNode } from "react";

interface DivisionProps extends HTMLProps<HTMLHRElement> {
  firstChildren?: ReactNode;
  lastChildren?: ReactNode;
  dMode?: "Light" | "Dark";
}

const Division: FC<DivisionProps> = ({
  firstChildren,
  lastChildren,
  dMode,
}: DivisionProps) => {
  return (
    <>
      {firstChildren}
      <hr />
      {lastChildren}
    </>
  );
};

export default Division;
