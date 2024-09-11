import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { CgClose } from "react-icons/cg";
import Card from "@/Components/Card/Card";
import Button from "@/Components/Button/Button";
import CartItem from "@/Interfaces/CartItem";
import useGetProfile from "@/Hooks/useGetProfile.hook";
import { tobaco } from "@/Styles/defaultStyles";
import { SaleBoxCart } from "@/Styles/pages/cart";
import { StyledCardContent, SaleCardImage } from "@/Styles/components/Card";

const Cart: FC = () => {
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

  const deleteItem = (amount: number, serie: string) => {
    const cartValue: number = parseInt(localStorage.getItem("cart_value")!);
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart_items")!);
    const itemIndex: number = cart.findIndex((item) => item.serie === serie);

    if (itemIndex !== -1) {
      let newValue: number = cartValue - amount;
      cart.splice(itemIndex, 1);

      localStorage.setItem("cart_items", JSON.stringify(cart));
      localStorage.setItem("cart_value", newValue.toString());
      window.location.reload();
    }
  };

  const products = items.map((product) => (
    <Card key={product.serie} cardClass="Sale">
      <CardContent sx={StyledCardContent}>
        <Button
          buttonClass="Operation"
          onClick={() => deleteItem(product.amount, product.serie)}
        >
          <CgClose />
        </Button>
        <h2>
          {product.name} marca <strong>{product.brand}</strong> de{" "}
          {Math.round(product.unit_grammage)} gramos
        </h2>
        <p>
          <strong>Cantidad:</strong> {product.amount} piezas
        </p>
        <p>
          <strong>Precio individual:</strong> ${product.price} varos
        </p>
        <p>
          <strong>Total:</strong> ${product.price * product.amount} varos
        </p>
      </CardContent>
      <SaleCardImage>
        <span
          style={{
            background: tobaco,
            width: "95%",
            height: "98%",
            padding: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          {product.image && (
            <img src={product.image} style={{ borderRadius: "8px" }} />
          )}
        </span>
      </SaleCardImage>
    </Card>
  ));

  return (
    <>
      <Box>{products}</Box>
      <Box sx={SaleBoxCart}>
        <h2>
          <strong>Cantidad de productos total:</strong> {getTotals()[0]}
        </h2>
        <h2>
          <strong>Precio total a pagar:</strong> ${getTotals()[1]}
        </h2>
        <div>
          <Link to="/">
            <Button buttonType="Turn back">Seguir comprando</Button>
          </Link>
          <Link to="/checkout">
            <Button buttonType="Buy">Enviar pedido</Button>
          </Link>
        </div>
      </Box>
    </>
  );
};

export default Cart;
