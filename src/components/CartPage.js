import { React } from "react";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
import "../cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/Cart";
import { db } from "../db/db";
import { useEffect } from "react";

export function Cart() {
  let { cartList } = useSelector((state) => state.cart);
  const db_Data = useLiveQuery(() => db.cartItems.toArray(), []);

  // const allItems = useLiveQuery(() => db.cartItems.toArray(), []);

  const dispatch = useDispatch();

  cartList = JSON.parse(localStorage.getItem("items")) || [];

  return (
    <div className=" container columns is-multiline mt-6 is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
      {db_Data?.map((products, key) => {
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
                onClick={() => dispatch(removeItem(products))}
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
