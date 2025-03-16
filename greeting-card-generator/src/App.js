import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GreetingCardGenerator from "./pages/GreetingCardGenerator";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import BrandData from "./pages/brand/BrandData";
import VoucherData from "./pages/voucher/VoucherData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="greeting_card" element={<GreetingCardGenerator />} />
          <Route path="brands" element={<BrandData />} />
          <Route path="vouchers" element={<VoucherData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;