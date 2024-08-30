import {FC, useState, useRef} from "react"
import clsx from 'clsx'
import lightModeIcon from "@/Icons/header/light_mode.png"
import darkModeIcon from "@/Icons/header/dark_mode.png"
import spanish from "@/Icons/spanish.png";
import english from "@/Icons/english.png";

import {
    FaGear,
    FaChevronDown,
    FaPlus,
    FaMinus,
    FaTextHeight
} from "react-icons/fa6"

const settings = '', optionsSelect = '', optionsTranslate = '', translateIdioms = '', actived = ''

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
        <img src={lightModeIcon} alt="light-mode" />
        <img src={darkModeIcon} alt="dark-mode" />
      </div>
      <div
        className={
          !settingsSelect ? settings : clsx([settings, actived])
        }
        onClick={toggleSettings}
      >
        <FaGear />
        <p>Ajustes</p>
        <FaChevronDown />
      </div>
      <ul ref={settingsRef} className={optionsSelect}>
        <li className={optionsTranslate}>
          <p>Translate</p>
        </li>
        <ul className={translateIdioms}>
          <li>
            <img src={spanish} alt="spanish" />
            <p>Spanish</p>
          </li>
          <li>
            <img src={english} alt="english" />
            <p>English</p>
          </li>
        </ul>
        <li>
          <div>
            <FaPlus
              onClick={() => {
                if (widthTextButton < 4) {
                  setWidthTextButton((widthTextButton += 1));
                  console.log(widthTextButton);
                }
              }}
            />
            <FaMinus
              onClick={() => {
                if (widthTextButton > 0) {
                  setWidthTextButton((widthTextButton -= 1));
                  console.log(widthTextButton);
                }
              }}
            />
          </div>
          <FaTextHeight />
        </li>
      </ul>
    </>
  )
}

export default Options