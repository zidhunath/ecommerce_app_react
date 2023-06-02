import { Route, Routes, Link } from "react-router-dom"
// import image from "../images/—Pngtree—abstract wave business logo_4092991.png";

export const Header = () => {
  return (
    <nav className = "navbar is-fixed-top has-background-info-dark mb-6">
      <div className = "navbar-brand media-content ml-4">
        <div className = "card-image">
          {/* <img src = {image} className = " image is-64x64" /> */}
        </div>
      </div>
      <div className = "navbar-end">
        <div className = "navbar-item">
          <div className = "buttons">
            <Link to ="/cart" className = "navbar-item button is-primary">
              <strong> Cart</strong>
            </Link>
            <Link to = "/signup"className = "button is-primary">
              <strong>Sign in</strong>
            </Link>
            <Link to = "/checkout"className = "navbar-item button is-primary">
              <strong>Checkout</strong>
            </Link>
            <Link to="/Dbcomponents" className = "navbar-item button is-primary"> 
            <strong>  
              FromDb
            </strong>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
