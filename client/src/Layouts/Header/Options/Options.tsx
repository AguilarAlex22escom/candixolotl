"use client";

import lightMode from "@/Icons/light-mode.png";
import darkMode from "@/Icons/dark-mode.png";
import spanish from "@/Icons/spanish.png";
import english from "@/Icons/english.png";
import { FC, useState, useRef } from "react";
import clsx from "clsx";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faGear,
  faChevronDown,
  faPlus,
  faMinus,
  faTextHeight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/Styles/Layout/Header/options.module.scss";

const { settings, optionsSelect, optionsTranslate, translateIdioms, actived } =
  styles;

const Options: FC = () => {
  let settingsRef = useRef<HTMLUListElement>(null);
  let [settingsSelect, setSettingsSelect] = useState(false);
  let [widthTextButton, setWidthTextButton] = useState(0);

  const toggleSettings = () => {
    settingsSelect === false
      ? (setSettingsSelect(true), settingsRef.current!.classList.add(actived))
      : (setSettingsSelect(false),
        settingsRef.current!.classList.remove(actived));
  };

  return (
    <>
      <div className="mode">
        <Image src={lightMode} alt="light-mode" />
        <Image src={darkMode} alt="dark-mode" />
        {/*<FontAwesomeIcon icon={faMoon} />
            <FontAwesomeIcon icon={faSun} />*/}
      </div>
      <div
        className={
          !settingsSelect ? settings : clsx([settings, actived])
        }
        onClick={toggleSettings}
      >
        <FontAwesomeIcon icon={faGear} />
        <p>Ajustes</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <ul ref={settingsRef} className={optionsSelect}>
        <li className={optionsTranslate}>
          <p>Translate</p>
        </li>
        <ul className={translateIdioms}>
          <li>
            <Image src={spanish} alt="spanish" />
            <p>Spanish</p>
          </li>
          <li>
            <Image src={english} alt="english" />
            <p>English</p>
          </li>
        </ul>
        <li>
          <div>
            <FontAwesomeIcon
              icon={faPlus}
              onClick={() => {
                if (widthTextButton < 4) {
                  setWidthTextButton((widthTextButton += 1));
                  console.log(widthTextButton);
                }
              }}
            />
            <FontAwesomeIcon
              icon={faMinus}
              onClick={() => {
                if (widthTextButton > 0) {
                  setWidthTextButton((widthTextButton -= 1));
                  console.log(widthTextButton);
                }
              }}
            />
          </div>
          <FontAwesomeIcon icon={faTextHeight} />
        </li>
      </ul>
    </>
  );
};
export default Options;
