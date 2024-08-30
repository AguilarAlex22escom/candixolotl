import useCartValue from "./useCartValue.hook";
import useCartItems from "./useCartItems.hook";

const AdderSubstracter: FC<ProductsData> = (product: ProductsData) => {
    let [units, setUnits] = useState<number>(1);
    let {updateCartValue} = useCartValue(units);
    let {updateCartItems} = useCartItems(product, units);
    
    const navigate = useNavigate();
    const setProductsOnCart = () => {
      updateCartItems();
      updateCartValue();
      // localStorage.removeItem("cart_value")
      // localStorage.removeItem("cart_items")
      navigate("/cart");
    };