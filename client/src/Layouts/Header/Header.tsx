import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";
import Button from "@/Components/Button/Button";
import NavBar from "./NavBar/NavBar";
import logo from "@/Images/aicholotlWeb.png";
import { StyledHeaderColors } from "@/Styles/layouts/header";
// import { FaBars } from "react-icons/fa6";
import { headerStyles } from "@/Styles/layouts/header";
import useLogoutCustomer from "@/Hooks/useLogoutCustomer.hook";
import useGetProfile from "@/Hooks/useGetProfile.hook";

const Header: FC = () => {
  const [cart, setCart] = useState<number>(0);
  const { userProfile, error } = useGetProfile();

  useEffect(() => {
    const cartValue = parseInt(localStorage.getItem("cart_value")!);
    setCart(cartValue || 0);
  }, []);

  return (
    <header className={headerStyles} style={StyledHeaderColors}>
      <NavBar />
      <Link to="/">
        <img src={logo} alt="AIcholotl" className="w-20" />
      </Link>
      {!userProfile || error ? (
        <Link to="/sign-up">
          <Button
            buttonType="Buy"
            buttonUIMode="Light"
          >
            Regístrate
          </Button>
        </Link>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "40%",
          }}
        >
          <h1>Hola de vuelta {userProfile.first_name} </h1>
          <Link to="/cart">
            <Button buttonType="Buy">
              <Badge color="warning" badgeContent={cart}>
                <FaShoppingCart />
              </Badge>
            </Button>
          </Link>
          <Link to="/">
            <Button buttonType="Buy" onClick={() => useLogoutCustomer()}>
              Cerrar sesión
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};
export default Header;
