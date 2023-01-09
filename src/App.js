import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

import db from "./utils/data.json";
import CardPage from "./pages/CardPage";
import { getFormdata } from "./hooks/useFormData";
import Card from "./components/Card";

export default function App() {
  const items = db.items.map((item) => item);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/form" element={<Form items={items} />} />
          <Route path="/cardPage/:id" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
