import { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHouse,
  faIdCard,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const NavBar: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>
            <FontAwesomeIcon icon={faHouse} />
            <p>Inicio</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </li>
        <li>
          <Link href={"Pages/catalogue"}>
            <FontAwesomeIcon icon={faBook} />
            <p>Catálogo</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </li>
        <li>
          <Link href={"Pages/about"}>
            <FontAwesomeIcon icon={faIdCard} />
            <p>Acerca de nosotrxs</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
