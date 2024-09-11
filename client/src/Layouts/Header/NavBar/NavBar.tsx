import { Link } from "react-router-dom";
import { FaBook, FaHouse, FaIdCard, FaChevronDown } from "react-icons/fa6";
import { navBarStyles, navBarOptionStyles, StyledNavBarP } from "@/Styles/layouts/header";

const NavBar = () => {
  return (
    <nav className={navBarStyles}>
      <Link
        to="/"
        className={navBarOptionStyles}
      >
        {/*<FaHouse />*/}
        <StyledNavBarP>Inicio</StyledNavBarP>
      </Link>
      {/**
       <Link to="/" className={navBarOptionStyles}>
         <FaBook />
         <p>Catálogo</p>
         <FaChevronDown />
       </Link>
       <Link to="/" className={navBarOptionStyles}>
         <FaIdCard />
         <p>Acerca de nosotrxs</p>
         <FaChevronDown />
       </Link>
       */}
    </nav>
  );
};

export default NavBar;
