import About from "./components/About";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Home from "./components/Home";
import Catalogue from "./components/Catalogue";
import CatalogueDetail from "./components/CatalogueDetail";
import CatalogueSpeaker from "./components/Cataloguespeaker";
import CatalogueCal from "./components/Cataloguecal";
import Cataloguelaptop from "./components/Cataloguelap";
import ProductDetail from "./components/ProductDetail";
import ContactUs from "./components/ContactUs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/catalogue" element={<Catalogue />} />*/}
        <Route path="/products" element={<Products />} />
        <Route name="catalogue" path="catalogue/watch" element={<CatalogueDetail />}/>
        <Route name="catalogue" path="catalogue/speaker" element={<CatalogueSpeaker />}/>
        <Route name="catalogue" path="catalogue/Calculator" element={<CatalogueCal />}/>
        <Route name="catalogue" path="catalogue/Laptop" element={<Cataloguelaptop />}/>
        <Route name="productdetail" path="/products/:productid" element={<ProductDetail />}/>
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
