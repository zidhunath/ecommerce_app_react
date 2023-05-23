import "bulma/css/bulma.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Signup } from "./components/signup";
import { Cart } from "./components/cart";
import { Checkout } from "./components/checkout";

function App() {
  return (
    <div className="container has-navbar-fixed-top ">
      <Router>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/cart" element={<Cart />} />
          <Route path = "/signup" element={<Signup />} />
          <Route path = "/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
