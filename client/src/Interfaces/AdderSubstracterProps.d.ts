import { Dispatch, SetStateAction } from "react";

export default interface AdderSubstracterProps {
  limit: number;
  units: number;
  setUnits: (units: number) => void;
}
