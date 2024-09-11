import {
  caoba,
  wine,
  purple,
  yellow,
  guinda,
  blue,
  snow,
  font,
} from "../defaultStyles";
import { keyframes, styled } from "styled-components";

export const headerStyles =
  "shadow-md pr-5 pl-5 pt-2 pb-2 flex justify-around items-center";
export const navBarStyles = "flex justify-evenly gap-5 p-5 items-center";
export const navBarOptionStyles = "flex justify-evenly items-center gap-1";

export const StyledHeaderColors = {
  backgroundColor: caoba,
  color: snow,
  fontFamily: font,
  borderBottom: `1px solid ${snow}`,
};

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

export const StyledNavBarP = styled.p`
  font-size: 1.2em;
  color: ${snow};
  position: relative;
  overflow: hidden;
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
      &::before {
        left: 0;
    }
  }
`;
