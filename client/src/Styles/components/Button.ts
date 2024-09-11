import { guinda, purple, blue, snow, tobaco, font } from "@/Styles/defaultStyles";

export const SaleStyles = {
  backgroundColor: tobaco,
  color: snow,
  fontFamily: font,
  fontSize: "1em",
  width: "160px",
  position: "relative",
  textTransform: "capitalize",
  transform: "translateY(0)",
  transition: "0.3s ease-out",
  "&:hover": {
    backgroundColor: snow,
    transform: "translateY(-10px)",
    color: guinda,
  },
};

export const OperationStyles = {
  backgroundColor: tobaco,
  fontFamily: font,
  fontSize: "1.5em",
  color: snow,
  "&:hover": {
    backgroundColor: snow,
    color: guinda,
  },
};

export const BuyStyles = {
  backgroundImage: `linear-gradient(325deg, ${guinda}, #55002A, ${guinda}, #55002A)`,
  color: snow,
  fontFamily: font,
  fontSize: "1em",
  margin: "8px",
  textTransform: "capitalize",
  backgroundSize: "200% 200%",
  transform: "translateY(0)",
  transition: "0.3s ease-in",
  animation: "animateButtonBackground 12s ease-out infinite",
  "&:hover": {
    transform: "translateY(-8px)",
  },
  "@keyframes animateButtonBackground": {
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

export const TurnBackStyles = {
  backgroundImage: `linear-gradient(325deg, ${purple}, ${guinda}, ${blue}, ${guinda})`,
  color: snow,
  fontFamily: font,
  fontSize: "1em",
  margin: "8px",
  textTransform: "capitalize",
  backgroundSize: "400% 400%",
  transform: "translateY(0)",
  transition: "0.3s ease-in",
  animation: "animateButtonBackground 12s ease-out infinite",
  "&:hover": {
    transform: "translateY(-8px)",
  },
  "@keyframes animateButtonBackground": {
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

export const WhatsAppStyles = {
  backgroundImage: "linear-gradient(325deg, #68F136, #4A8B8B) !important",
}

export let StyledMessageButton = Object.assign({}, BuyStyles, WhatsAppStyles);