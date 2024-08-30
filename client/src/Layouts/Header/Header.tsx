import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";
// import Options from "./Options/Options";
import Button from "@/Components/Button/Button";
import NavBar from "./NavBar/NavBar";
import logo from "@/Images/logo.png";
// import { FaBars } from "react-icons/fa6";
import { headerStyles } from "@/Styles/layouts/header";
import useLogoutCustomer from "@/Hooks/useLogoutCustomer.hook";
// import useToggleResponsiveMenu from "@/Hooks/Layout/useToggleResponsiveMenu";

const Header: FC = () => {
  // const [cart, setCart] = useState<number>(0);
  // const cart = localStorage.getItem("cart_value")!
  const token = localStorage.getItem("tokenAuth");
  const cartValue = parseInt(localStorage.getItem("cart_value")!);

  // setCart(parseInt(cartValue))

  return (
    <header className={headerStyles}>
      <NavBar />
      <img src={logo} alt="CandIxolotl" className="w-20" />
      {/*<Options />*/}
      {!token ? (
        <Link to="/sign-up">
          <Button
            buttonClass="Session"
            buttonType="Sign up"
            buttonUIMode="Light"
          >
            Registrate
          </Button>
        </Link>
      ) : (
        <div>
          <h1>Usuario iniciado.</h1>
          <Link to="/cart">
            <Button>
              <Badge color="warning" badgeContent={cartValue}>
                <FaShoppingCart />
              </Badge>
            </Button>
          </Link>
          <Link to="/">
            <Button onClick={() => useLogoutCustomer()}>Cerrar sesión</Button>
          </Link>
        </div>
      )}
    </header>
  );
};
export default Header;
