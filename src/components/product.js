
import product_Data from "../data/product_Data.json";
import { useState } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

export const Product = (props) => {
  const { id, image, name, desc,price } = props;
  
  const navigate = useNavigate();
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/cart');
  };

  let [text, setText] = useState("Add to cart");
  let [redirect,setRedirection] = useState(false);

  const handleClick = (event) => {
    const targetId = event.currentTarget.id;
    let productInLocalStorage= false;

    const productArray = JSON.parse(localStorage.getItem("items")) || [];

    productArray.map((items)=>{
      if(targetId == items.id) productInLocalStorage=true
    })


    product_Data.filter((product) => {
      if (targetId == product.id && !productInLocalStorage ) {
        product.quantity ++
        productArray.push(product);
        
      }
      localStorage.setItem("items", JSON.stringify(productArray));
    });

   
    setRedirection(!redirect)
  };
  
  
  return (   
      <div key = {id} >
        <div className = "card box" key = {id} >         
          <div className = "card-image">
            <img className = "image is-128x128" src = {image} />
          </div>
          <div className = "card-content">
            <div className = "media-content">
              <p className = "title is-6">{name}</p>
              <p className = "subtitle is-6 mt-2">{desc}</p>
              <p className = "subtitle is-6 mt-2">Price : ₹ {price}</p>
            </div>
            <button className = "button is-info mt-4" id = {id}  onClick={handleClick}>Add toCart</button>
          </div>
        </div>
      </div>   
  );
};