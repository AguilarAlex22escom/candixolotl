import styled from "styled-components";
import { font } from "../defaultStyles";
import { glasmorphismBorderOne, glasmorphismBorderTwo, wine, guinda, caoba, snow } from "../defaultStyles";

export const InformativeStyles = {
  backgroundImage: `linear-gradient(325deg, ${wine} 25%, ${guinda})`,
  color: snow,
  margin: "16px",
  maxWidth: "20em",
  textAlign: "center",
  boxShadow: `0 4px 8px ${caoba}`,
  borderRight: glasmorphismBorderOne,
  borderTop: glasmorphismBorderOne,
  borderLeft: glasmorphismBorderTwo,
  borderBottom: glasmorphismBorderTwo,
  backdropFilter: "blur(12px)",
};

export const SessionStyles = {
  backgroundColor: "green",
};

export const CardH1 = styled.h1`
  font-family: ${font};
  font-weight: 700;
  font-size: 1.4em;
  margin: 4px 0;
`;

export const CardH2 = styled.h2`
  font-family: ${font};
  font-weight: 700;
  font-size: 1.2em;
  margin: 4px 0;
`;
