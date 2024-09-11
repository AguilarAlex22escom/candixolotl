import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreLoader from "@/Images/preloader.svg";
import MainLayout from "@/Layouts/MainLayout";

const Home = lazy(() => import("@/Pages/Home"));
const SignUp = lazy(() => import("@/Pages/SignUp"));
const LogIn = lazy(() => import("@/Pages/LogIn"));
const Product = lazy(() => import("@/Pages/Product"));
const Cart = lazy(() => import("@/Pages/Cart"));
const Checkout = lazy(() => import("@/Pages/Checkout"));

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <MainLayout>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={PreLoader} />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/log-in" element={<LogIn />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route
                key=":id"
                path="/:kind/:name/:serie/:id/"
                element={<Product />}
              />
            </Routes>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
// https://icons8.com/preloaders/
