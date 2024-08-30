import { FC, useState } from "react";
import Button from "@/Components/Button/Button";
import AdderSubstracterProps from "@/Interfaces/AdderSubstracterProps.d"

const AdderSubstracter: FC<AdderSubstracterProps> = ({limit}) => {
  const [units, setUnits] = useState<number>(1);
  const addSubstractUnits = (op: "add" | "substract") => {
    if (op == "add") {
      units < limit ? setUnits(units + 1) : setUnits(limit);
    } else if (op == "substract") {
      units == 1? setUnits(1) : setUnits(units - 1);
    }
  };

  return (
    <>
      <Button onClick={() => addSubstractUnits("substract")}>-</Button>
      <p>{units}</p>
      <Button onClick={() => addSubstractUnits("add")}>+</Button>
    </>
  );
};

export default AdderSubstracter;
/*
const AdderSubstracter: FC<AdderSubstracterProps> = ({units, setUnits}) => {
  const addSubstractUnits = (op: "add" | "substract") => {
    if (op == "add") {
      setUnits(prevUnits => prevUnits + 1);
    } else if (op == "substract") {
      units == 1 ? setUnits(1) : setUnits(prevUnits => prevUnits - 1);
    }
  };

  return (
    <>
      <Button onClick={() => addSubstractUnits("substract")}>-</Button>
      <p>{units}</p>
      <Button onClick={() => addSubstractUnits("add")}>+</Button>
    </>
  );
};

export default AdderSubstracter;
*/