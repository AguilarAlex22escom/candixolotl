import { FC } from "react";
import { useParams } from "react-router-dom";
import { Box, CardActions } from "@mui/material/";
import Card from "@/Components/Card/Card";
import AdderSubstracter from "@/Components/AdderSubstracter/AdderSubstracter"
import useGetProduct from "@/Hooks/useGetProduct.hook";
import ProductsData from "@/Interfaces/ProductsData.d"

const Product: FC = () => {
  const { id } = useParams();
  const productElement: ProductsData | undefined = useGetProduct(id!);

  return (
    <Box>
      <Card>
        {productElement ? (
          <div>
            <Card>
              <h1>{productElement.name}</h1>
              <h2>{productElement.brand} - {productElement.unit_grammage}</h2>
              <p>{productElement.description}</p>
            </Card>
            {productElement.image &&
              <img src={productElement.image} />
            }
            <CardActions>
              <AdderSubstracter limit={productElement.units} />
            </CardActions>
          </div>
          ) : (
          <h1>No product found...</h1>
          )
        }
      </Card>
    </Box>
  );
};

export default Product;
