import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Link, Routes, Route } from "react-router";
import { About } from "./routing/About.tsx";
import { Home } from "./routing/Home.tsx";
import { Login } from "./routing/Home/Login.tsx";
import { Register } from "./routing/Home/Register.tsx";
import { NoPage } from "./routing/NoPage.tsx";
import { Product } from "./routing/Product.tsx";
import { ProductList } from "./routing/ProductList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </div>

      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:id/:group?" element={<Product />}></Route>

        <Route path="*" element={<NoPage></NoPage>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
