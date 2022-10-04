import About from "./components/About";
import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <MenuBar />
      <About />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
