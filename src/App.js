import "bulma/css/bulma.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Signup } from "./components/Signup";
import { Cart } from "./components/CartPage";
import { Checkout } from "./components/Checkout";
import { DbComponents } from "./components/Dbcomponents";

function App() {
  return (
    <div className="container has-navbar-fixed-top ">
      <Router>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/cart" element={<Cart />} />
          <Route path = "/signup" element={<Signup />} />
          <Route path = "/checkout" element={<Checkout />} />
          <Route path="/Dbcomponents" element={<DbComponents />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
