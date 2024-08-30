import { useState } from "react";
import ProductsData from "@/Interfaces/ProductsData.d";
import CartItem from "@/Interfaces/CartItem.d";

const useCartItems = (product: ProductsData, units: number) => {
  let [items, setItems] = useState<CartItem[]>(() => {
    let selectedItem = localStorage.getItem("cart_items");
    let cartItems: CartItem[] = selectedItem ? JSON.parse(selectedItem!) : [];
    return Array.isArray(cartItems) ? cartItems : [];
  });

  const resetProduct = () => {
    product = {
      id: 0,
      name: "",
      description: "",
      brand: "",
      image: "",
      kind: "",
      price: 0,
      units: 0,
      unit_grammage: 0.0,
      serie: "ab01",
    };
  };

  const updateCartItems = () => {
    const filteredItem = items.findIndex((item) => item.serie == product.serie);
    const newItem = { ...product, amount: units };
    let updatedItems: CartItem[] = [...items];

    filteredItem != -1
      ? (items[filteredItem].amount += units)
      : updatedItems.push(newItem);
    setItems(updatedItems);
    localStorage.setItem("cart_items", JSON.stringify(updatedItems));
    resetProduct();
  };
  return { updateCartItems };
};

export default useCartItems;
