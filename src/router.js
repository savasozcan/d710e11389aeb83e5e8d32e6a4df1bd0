import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Route } from "react-router";

// Pages
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/product-detail" element={<ProductDetail />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
