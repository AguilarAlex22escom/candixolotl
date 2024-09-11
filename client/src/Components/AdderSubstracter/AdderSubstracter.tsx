import { FC } from "react";
import Button from "@/Components/Button/Button";
import AdderSubstracterProps from "@/Interfaces/AdderSubstracterProps.d";
import { font } from "@/Styles/defaultStyles";
import { StyledAdderSubstracter } from "@/Styles/components/AdderSubstracter";

const AdderSubstracter: FC<AdderSubstracterProps> = ({
  limit,
  units,
  setUnits,
}) => {
  const addSubstractUnits = (op: "add" | "substract") => {
    if (op == "add") {
      units < limit ? setUnits(units + 1) : setUnits(limit);
    } else if (op == "substract") {
      units == 1 ? setUnits(1) : setUnits(units - 1);
    }
  };

  return (
    <div style={StyledAdderSubstracter}>
      <Button
        buttonClass="Operation"
        onClick={() => addSubstractUnits("substract")}
      >
        -
      </Button>
      <p>{units}</p>
      <Button buttonClass="Operation" onClick={() => addSubstractUnits("add")}>
        +
      </Button>
    </div>
  );
};

export default AdderSubstracter;
