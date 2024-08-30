import ProductsData from "./ProductsData.d"

export default interface CartItem extends ProductsData {
    amount: number;
}