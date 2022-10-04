import About from "./components/About";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Home from "./components/Home";
import Catalogue from "./components/Catalogue";
import CatalogueDetail from "./components/CatalogueDetail";
import ProductDetail from "./components/ProductDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/products" element={<Products />} />
        <Route name="catalogue" path="/catalogue/:cataloguename" element={<CatalogueDetail />}/>
        <Route name="productdetail" path="/products/:productid" element={<ProductDetail />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
