import { React } from "react";
import { useState, useEffect } from "react";
import "../cart.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity,removeItem } from "../redux/Cart";

export function Cart() {
  const { cartList } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const productArray = JSON.parse(localStorage.getItem("items")) || [];

  let [dipsayItems, setDisplay] = useState([]);
  const removItem = (id) => {
    productArray.map((productItem, index) => {
      if (id == productItem.id) {
        productArray.splice(index, 1);
        localStorage.setItem("items", JSON.stringify(productArray));
        dipsayItems = [...productArray];
      }
    });
    setDisplay(dipsayItems);
  };

  return (
    <div className=" container columns is-multiline mt-6 is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
      {productArray.map((products, key) => {
        return (
          <div className="card box" key={products.id}>
            <div className="card-image">
              <img className="image is-128x128" src={products.image} />
            </div>
            <div className="card-content ">
              <div className="media-content">
                <p className="title is-6  mt-2 ">{products.name}</p>
                <p className="subtitle is-6 mt-2 ">{products.description}</p>
                <p className="subtitle is-6 mt-2">Price : ₹ {products.price}</p>
              </div>
            </div>
            <div className="columns is-3 has-text-centered">
              <div className="column button ">
                <button
                  className="button "
                  onClick={() => dispatch(decrementQuantity(products))}
                >
                  -
                </button>
              </div>
              <div className="column button ">
                <p className="is-size-6 ">{products.quantity} </p>
              </div>
              <div className="column button">
                <button
                  id={products.id}
                  className="button "
                  onClick={() => dispatch(incrementQuantity(products))}
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <button
                id={products.id}
                className="button is-danger"
                onClick={() => dispatch(removeItem(products)) }
              >
                Remove item
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
