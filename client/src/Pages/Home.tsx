import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { CardContent, CardMedia, CardActions } from "@mui/material/";
import Skeleton from "@mui/material/Skeleton";
import useGetProducts from "@/Hooks/useGetProducts.hook";
import CartManager from "@/Components/CartManager/CartManager";
import Card from "@/Components/Card/Card";
import Button from "@/Components/Button/Button";
import ProductsData from "@/Interfaces/ProductsData";
import { blue, guinda } from "@/Styles/defaultStyles";
import { StyledMain } from "@/Styles/pages/home";
import {
  CardH1,
  CardH2,
  StyledCardActions,
  StyledCardActionsDiv,
} from "@/Styles/components/Card";

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
      <Helmet>
        <title>AIcholotl</title>
      </Helmet>
      <StyledMain className="home">
        <h1>¡Conoce nuestros nuevos productos!</h1>
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
                <p>${product.price} varos</p>
                <p>{product.units} piezas aún disponibles</p>
              </CardContent>
              <CardActions sx={StyledCardActions}>
                <StyledCardActionsDiv>
                  <Button
                    buttonClass="Sale"
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
                  <CartManager {...product} />
                </StyledCardActionsDiv>
              </CardActions>
            </Card>
          ))
        ) : (
          <>
            <Card>
              <Skeleton
                sx={{ backgroundColor: blue }}
                variant="rectangular"
                width={360}
                height={200}
              />
              <Skeleton
                sx={{ backgroundColor: blue }}
                width={360}
                height={160}
              />
              <Skeleton
                sx={{ backgroundColor: blue }}
                variant="rectangular"
                width={360}
                height={200}
              />
            </Card>
            <Card>
              <Skeleton
                sx={{ backgroundColor: blue }}
                variant="rectangular"
                width={360}
                height={200}
              />
              <Skeleton
                sx={{ backgroundColor: blue }}
                width={360}
                height={160}
              />
              <Skeleton
                sx={{ backgroundColor: blue }}
                variant="rectangular"
                width={360}
                height={200}
              />
            </Card>
            <Card>
              <Skeleton
                sx={{ backgroundColor: blue }}
                variant="rectangular"
                width={360}
                height={200}
              />
              <Skeleton
                sx={{ backgroundColor: blue }}
                width={360}
                height={160}
              />
              <Skeleton
                sx={{ backgroundColor: blue }}
                variant="rectangular"
                width={360}
                height={200}
              />
            </Card>
          </>
        )}
      </StyledMain>
    </>
  );
};

export default Home;
