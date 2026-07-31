import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";
import ProductPaga from "./Pages/ProductPaga";
import Context from "./ContextApi/Context";

function App() {
  return (
    <>
      <Context>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path={`/ProductPaga/:id`} element={<ProductPaga />} />
        </Routes>
        <Footer />
      </Context>
    </>
  );
}

export default App;

CartPage