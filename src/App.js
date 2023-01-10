import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CardPage from "./pages/CardDetails";
import Footer from "./components/Footer";
import FormPage from "./pages/FormPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/cardPage/:id" element={<CardPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
