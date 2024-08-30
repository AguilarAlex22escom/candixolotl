import { useState } from "react";
// import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { CardContent, CardMedia, CardActions } from "@mui/material/";
import useGetProducts from "@/Hooks/useGetProducts.hook";
import Card from "@/Components/Card/Card";
import Button from "@/Components/Button/Button";
import AdderSubstracter from "@/Components/AdderSubstracter/AdderSubstracter";
import ProductsData from "@/Interfaces/ProductsData";
import { StyledMain } from "@/Styles/pages/home";
import { CardH1, CardH2 } from "@/Styles/components/Card";

const Home = () => {
  const products: ProductsData[] = useGetProducts();
  const navigate = useNavigate();
  const getProductDetails = (
    kind: string | undefined,
    name: string,
    serie: string,
    id: number
  ) => {
    navigate(`/${kind}/${name}/${serie}/${id}`);
  };

  return (
    <>
      {/*<Helmet>
        <meta charSet="utf-8" />
        <title>Bienvenidx a AIcholotl!</title>
      </Helmet>*/}
      <StyledMain className="home">
        <h1>¡Conoce nuestros nuevos productos para deleitar tu paladar!</h1>
        {products.length > 0 ? (
          products.map((product: ProductsData) => (
            <Card cardClass="Informative" key={product.id}>
              {product.image && (
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.brand}
                />
              )}
              <CardContent>
                <CardH1>{product.name}</CardH1>
                <CardH2>{product.brand}</CardH2>
                <p>
                  <strong>Precio:</strong> ${product.price} varos.
                </p>
                <p>
                  <strong>Piezas disponibles:</strong> {product.units} piezas
                </p>
                <p>{product.kind}</p>
              </CardContent>
              <CardActions sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                  onClick={() =>
                    getProductDetails(
                      product.kind,
                      product.name,
                      product.serie,
                      product.id
                    )
                  }
                >
                  Ver más
                </Button>
                <Button>Añadir al carrito</Button>
                <AdderSubstracter limit={product.units} />
              </CardActions>
            </Card>
          ))
        ) : (
          <p>No products found</p>
        )}
      </StyledMain>
    </>
  );
};

export default Home;
