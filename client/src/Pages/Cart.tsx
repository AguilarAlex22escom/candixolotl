import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { CgClose } from "react-icons/cg";
import Card from "@/Components/Card/Card";
import Button from "@/Components/Button/Button";
//import AdderSubstracter from "@/Components/AdderSubstracter/AdderSubstracter";
import CartItem from "@/Interfaces/CartItem";
import useGetProfile from "@/Hooks/useGetProfile.hook";

const Cart: FC = () => {
  //let [units, setUnits] = useState<number>(1);
  const cart = localStorage.getItem("cart_items");
  const cartItems: CartItem[] = cart ? JSON.parse(cart!) : [];
  const items = cartItems.filter((item) => item.image != null);

  const getTotals = () => {
    let totalProducts: number = 0,
      totalPrice: number = 0;
    items.forEach((item) => {
      totalProducts += item.amount;
      totalPrice += item.amount * item.price;
    });
    return [totalProducts, totalPrice];
  };

  const products = items.map((product) => (
    <Card key={product.serie}>
      <Button>
        <CgClose />
      </Button>
      <h2>
        {product.name} marca {product.brand} de {product.unit_grammage}
      </h2>
      <p>
        <strong>Cantidad:</strong>{product.amount}
        {/* <AdderSubstracter
          units={units}
          setUnits={() => editSelectedAmounts(product.serie, units)}
        /> */}
      </p>
      <p>
        <strong>Precio individual:</strong> ${product.price}
      </p>
      <p>
        <strong>Total:</strong> ${product.price * product.amount}
      </p>
      {product.image && <img src={product.image} />}
    </Card>
  ));

  return (
    <>
      <Box>{products}</Box>
      <Box>
        <h2>
          <strong>Cantidad de productos total:</strong> {getTotals()[0]}
        </h2>
        <h2>
          <strong>Precio total a pagar:</strong> ${getTotals()[1]}
        </h2>
        <div>
          <Link to="/">
            <Button>Seguir comprando</Button>
          </Link>
          <Link to="/checkout">
            <Button>Pagar</Button>
          </Link>
        </div>
      </Box>
    </>
  );
};

export default Cart;
