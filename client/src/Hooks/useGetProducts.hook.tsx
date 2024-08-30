import { useState, useEffect } from "react";
import ProductsData from "@/Interfaces/ProductsData.d";
import { getProducts } from "@/api/products.api";

const useGetProducts = () => {
  const [products, setProducts] = useState<ProductsData[]>([]);

  useEffect(() => {
    const getProductList = async () => {
      try {
        const response = await getProducts();
        if (response && response.data) {
          setProducts(response.data);
        } else {
          console.log("No data received");
        }
      } catch (error) {
        console.log(`The error was the next: ${error}`);
      }
    };
    getProductList();
  }, []);
  return products;
};

export default useGetProducts;
