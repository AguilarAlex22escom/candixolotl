import { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/Components/Button/Button";
import AdderSubstracter from "@/Components/AdderSubstracter/AdderSubstracter";
import ProductsData from "@/Interfaces/ProductsData.d";
import useCartValue from "@/Hooks/useCartValue.hook";
import useCartItems from "@/Hooks/useCartItems.hook";

const CartManager: FC<ProductsData> = (product: ProductsData) => {
  let [units] = useState<number>(1);
  let { updateCartValue } = useCartValue(units);
  let { updateCartItems } = useCartItems(product, units);

  const navigate = useNavigate();

  const setProductsOnCart = () => {
    updateCartItems();
    updateCartValue();
    localStorage.removeItem("cart_value")
    localStorage.removeItem("cart_items")
    navigate("/cart");
  };
  return (
    <>
      <AdderSubstracter limit={units} />
      <Button onClick={() => setProductsOnCart()}>Añadir al carrito</Button>;
    </>
  );
};

export default CartManager;
