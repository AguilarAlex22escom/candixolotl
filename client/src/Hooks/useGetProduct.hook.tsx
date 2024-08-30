import { useState, useEffect } from "react";
import ProductsData from "@/Interfaces/ProductsData.d";
import { getProduct } from "@/api/products.api";
import { AxiosResponse } from "axios";

const useGetProduct = (id: string) => {
  const [product, setProduct] = useState<ProductsData>();
  const covered_id = parseInt(id)

  useEffect(() => {
    const getProductElement = async () => {
      try {
        const response: AxiosResponse<ProductsData> | undefined = await getProduct(covered_id);
        if (response && response.data.id == covered_id) {
          setProduct(response.data);
        } else {
          console.log("No product existent.");
        }
      } catch (error) {
        console.log(`The error was the next: ${error}`);
      }
    };
    getProductElement();
  }, [covered_id]);
  return product;
};

export default useGetProduct;
