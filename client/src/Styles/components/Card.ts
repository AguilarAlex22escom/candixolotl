import { keyframes, styled } from "styled-components";
import { font } from "../defaultStyles";
import {
  glasmorphismBorderOne,
  glasmorphismBorderTwo,
  wine,
  guinda,
  caoba,
  tobaco,
  snow,
  blue,
  purple,
} from "../defaultStyles";
import "@/App.css";

const animateImage = keyframes`
  from {
    --angle: 0deg;
  }

  to {
    --angle: 360deg;
  }
`;

export const InformativeStyles = {
  backgroundImage: `linear-gradient(325deg, ${tobaco} 25%, ${caoba})`,
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
  backgroundColor: tobaco,
  width: "60%",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const SaleStyles = {
  backgroundColor: caoba,
  width: "100%",
  padding: "8px 0 8px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
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

export const SaleCardImage = styled.div`
  width: 25%;
  height: 100%;
  padding: 16px 0;
  border-radius: 8px;
  position: relative;
  z-index: 2;
  &::before,
  &::after {
    --angle: 0deg;
    content: "";
    position: absolute;
    background-image: conic-gradient(
      from var(--angle),
      transparent,
      ${purple},
      ${guinda}
    );
    top: 0%;
    left: 0%;
    transform: translate(-2.5%, 2.5%);
    padding: 4px;
    border-radius: 8px;
    z-index: -1;
    width: 100%;
    height: 95%;
    inset: 0;
    animation: 6s ${animateImage} linear infinite;
  };
  &::before {
    filter: blur(1.5rem);
  }
`;

export const StyledCardContent = {
  backgroundColor: tobaco,
  color: snow,
  width: "60%",
  margin: "0 16px",
};

export const StyledCardActions = {
  backgroundImage: `linear-gradient(325deg, ${guinda}, #55002A, ${guinda}, #55002A)`,
  backgroundSize: "200% 200%",
  display: "flex",
  flexDirection: "column",
  animation: "animateCardGradient 12s ease-out infinite",
  "@keyframes animateCardGradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
};

export const StyledCardActionsDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
