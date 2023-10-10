"use client";

import NavBar from "./NavBar/NavBar";
import logo from "@/Images/logo.png";
import Options from "./Options/Options";
import Button from "@/Components/Button/Button";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FC, useState, useRef } from "react";
import styles from "@/Styles/Layout/Header/navbar.module.scss";
import clsx from "clsx";

const { menu, menuButton, actived } = styles;

const Header: FC = () => {
  let responsiveMenuRef = useRef<HTMLHeadingElement>(null);
  let [responsiveMenu, setResponsiveMenu] = useState(false);

  const toggleResponsiveMenu = () => {
    responsiveMenu === false
      ? (setResponsiveMenu(true),
        responsiveMenuRef.current!.classList.add(actived))
      : (setResponsiveMenu(false),
        responsiveMenuRef.current!.classList.remove(actived));
  };

  // let [responsiveMenu, setResponsiveMenu] = useState(false);

  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        className={!responsiveMenu ? menuButton : clsx([menuButton, actived])}
        onClick={toggleResponsiveMenu}
      />
      <header ref={responsiveMenuRef} className={menu}>
        <NavBar />
        <Image src={logo} alt="The-Florks" />
        <Options />
        <Link href={"Pages/signUp"}>
          <Button bType="Sign up" bClass="Session" bMode="light">
            Registrate
          </Button>
        </Link>
      </header>
    </>
  );
};
export default Header;
