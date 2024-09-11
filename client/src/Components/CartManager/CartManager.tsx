import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/Components/Button/Button";
import AdderSubstracter from "@/Components/AdderSubstracter/AdderSubstracter";
import ProductsData from "@/Interfaces/ProductsData.d";
import useCartValue from "@/Hooks/useCartValue.hook";
import useCartItems from "@/Hooks/useCartItems.hook";
import useUnits from "@/Hooks/useUnits.hook";

const CartManager: FC<ProductsData> = (product: ProductsData) => {
  let {units, setUnits} = useUnits();
  let { updateCartValue } = useCartValue(units);
  let { updateCartItems } = useCartItems(product, units);

  const navigate = useNavigate();

  const setProductsOnCart = () => {
    updateCartItems();
    updateCartValue();
    // localStorage.removeItem("cart_value")
    // localStorage.removeItem("cart_items")
    navigate("/cart");
    window.location.reload();
  };
  return (
    <>
      <AdderSubstracter limit={product.units} units={units} setUnits={setUnits} />
      <Button buttonClass="Sale" onClick={() => setProductsOnCart()}>Añadir al carrito</Button>
    </>
  );
};

export default CartManager;
