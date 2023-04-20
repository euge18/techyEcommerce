import Header from "./Header"; //Include Header
import Footer from "./Footer"; //Include Footer
import Home from "./Home";
import Shop from "./Shop";
import SingleProduct from "./SingleProduct";
import Checkout from "./Checkout";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import HomeErrors from "./HomeErrors";
import HomeMasVendido from "./HomeMasVendidos";
import HomeCarousell from "./HomeCarousell";
import HomeOferta from "./HomeOferta";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          //Con errores solucionados
          <Route path="/" element={<Home />} />
          //Con errores
          <Route path="/errors" element={<HomeErrors />} />
          //Mejoras
          <Route path="/home1" element={<HomeMasVendido />} />
          <Route path="/home2" element={<HomeCarousell />} />
          <Route path="/home3" element={<HomeOferta />} />
          //Shop
          <Route path="/shop" element={<Shop />} />
          {/*<Route path="/single-product" element={<SingleProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />*/}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
export default App;
