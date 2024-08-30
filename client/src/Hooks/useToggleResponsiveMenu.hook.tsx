import { useState, useRef } from "react";

const useToggleResponsiveMenu = (actived: any) => {
  const responsiveMenuRef = useRef<HTMLHeadingElement>(null);
  const [responsiveMenu, setResponsiveMenu] = useState(false);

  responsiveMenu === false
    ? (setResponsiveMenu(true),
      responsiveMenuRef.current!.classList.add(actived))
    : (setResponsiveMenu(false),
      responsiveMenuRef.current!.classList.remove(actived));

  return {responsiveMenu, responsiveMenuRef};
};

export default useToggleResponsiveMenu;
