import { styled, keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const guinda: string = "#800040";
export const wine: string = "#401028";
export const yellow: string = "#F4FB27";
export const blue: string = "#289CFA";
export const purple: string = "#2A0044";
export const tobaco: string = "#19191C";
export const caoba: string = "#161412";
export const shadow: string = "#080706";
export const snow: string = "#FFF9FB";
export const font: string = "'Comfortaa', sans-serif";
export const glasmorphismBorderOne: string = `1px solid rgba(255, 249, 251, 0.2)`;
export const glasmorphismBorderTwo: string = `1px solid rgba(255, 249, 251, 0.1)`;

const animatedGradient = keyframes`
  0%{
    background-position: 0% 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0% 50%;
  }
`;

export const StyledRedirect = styled(Link)`
  color: ${blue};
  position: relative;
  overflow: hidden;
  margin: 8px 0 4px;
  padding: 0 0 4px 0;
  transition: 0.3s ease-in;
  &::before {
    content: "";
    position: absolute;
    background: linear-gradient(
      to left,
      ${guinda},
      ${blue}
    );
    background-size: 400% 400%;
    width: 100%;
    height: 4px;
    left: -100%;
    bottom: 0;
    border-radius: 4px;
    transition: 0.3s ease-in;
    animation: ${animatedGradient} ease 12s infinite;
    }
    &:hover {
        color: ${snow};
      &::before {
        left: 0;
    }
  }
`

