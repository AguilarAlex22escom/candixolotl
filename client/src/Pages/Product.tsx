import { FC } from "react";
import { useParams } from "react-router-dom";
import { Box, CardActions, CardContent, Chip, Skeleton } from "@mui/material/";
import Card from "@/Components/Card/Card";
import CartManager from "@/Components/CartManager/CartManager";
import useGetProduct from "@/Hooks/useGetProduct.hook";
import ProductsData from "@/Interfaces/ProductsData.d";
import { blue, tobaco, font } from "@/Styles/defaultStyles";
import {
  SaleCardImage,
  CardH1,
  CardH2,
  StyledCardContent,
} from "@/Styles/components/Card";

const Product: FC = () => {
  const { id } = useParams();
  const productElement: ProductsData | undefined = useGetProduct(id!);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        {productElement ? (
          <Card cardClass="Sale">
            {productElement.image && (
              <SaleCardImage>
                <span
                  style={{
                    background: tobaco,
                    width: "95%",
                    height: "98%",
                    padding: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={productElement.image}
                    style={{ borderRadius: "8px" }}
                  />
                </span>
              </SaleCardImage>
            )}
            <CardContent sx={StyledCardContent}>
              <CardH1>{productElement.name}</CardH1>
              <CardH2>
                {productElement.brand} de{" "}
                {Math.round(productElement.unit_grammage)} gramos
              </CardH2>
              <p>{productElement.description}</p>
              <p>${productElement.price}</p>
              <Chip
                sx={{ fontFamily: font, background: blue, margin: "8px 0" }}
                label={productElement.kind}
              />
              <CardActions sx={{ width: "50%" }}>
                <CartManager {...productElement} />
              </CardActions>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <Skeleton
              sx={{ backgroundColor: blue }}
              variant="rectangular"
              width={360}
              height={400}
            />
          </Card>
        )}
      </div>
    </Box>
  );
};

export default Product;
