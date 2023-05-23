import { React } from "react";
import { useState, useEffect } from "react";
import "../cart.css";
import { json } from "react-router-dom";

export function Cart() {
  const productArray = JSON.parse(localStorage.getItem("items")) || [];

  let [dipsayItems, setDisplay] = useState([]);
  let [quantity, setQuantitiy] = useState(1);

  const increaseQuanatity = (id) => {
    productArray.map((item) => {
      if (id == item.id) {
        item.quantity++;
        quantity = item.quantity;
        localStorage.setItem("items", JSON.stringify(productArray));
      }
    });
    setQuantitiy(quantity);
  };
  const decreaseQuantity = (id) => {
    productArray.map((productitem) => {
      if (id == productitem.id) {
        if (productitem.quantity > 0) {
          productitem.quantity--;
          quantity = productitem.quantity;
          localStorage.setItem("items", JSON.stringify(productArray));
        }
        if (productitem.quantity == 0) {
          productitem.quantity = 1;
          quantity = productitem.quantity;
          localStorage.setItem("items", JSON.stringify(productArray));
        }
      }
    });
    setQuantitiy(quantity);
  };
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
                  onClick={() => decreaseQuantity(products.id)}
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
                  onClick={() => increaseQuanatity(products.id)}
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <button
                id={products.id}
                className="button is-danger"
                onClick={() => removItem(products.id)}
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
