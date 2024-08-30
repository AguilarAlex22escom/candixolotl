import { useState } from "react";

const useCartValue = (units: number) => {
  let [cartValue, setCartValue] = useState<number>(() => {
    let cart = localStorage.getItem("cart_value");
    let cartToInt = parseInt(cart || "0");
    return cartToInt;
  });
  
  const updateCartValue = () => {
    let newCartValue = cartValue + units;
    setCartValue(newCartValue)
    localStorage.setItem("cart_value", newCartValue.toString());
  }
  return {updateCartValue}
};

export default useCartValue;
