import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/Layouts/MainLayout";

const Home = lazy(() => import("@/Pages/Home"));
const SignUp = lazy(() => import("@/Pages/SignUp"));
const LogIn = lazy(() => import("@/Pages/LogIn"));
const Product = lazy(() => import("@/Pages/Product"));
const Cart = lazy(() => import("@/Pages/Cart"));
const Checkout = lazy(() => import("@/Pages/Checkout"));

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route key=":id" path="/:kind/:name/:serie/:id/" element={<Product />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
