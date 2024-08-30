import API from "./main.api";

export const getProducts = async () => {
  try {
    const response = await API.get("products/");
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getProduct = async (id: number) => {
  try {
    const response = await API.get(`products/${id}`)
    return response
  } catch(err) {
    console.log(err)
  }
}