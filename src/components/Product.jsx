import React, { useState } from "react";
import productDetails from "./productDetails";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { UseSelector } from "react-redux/es/hooks/useSelector";

function Product(props) {
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);
  const dispatch = useDispatch();

  return (
    <div className="product ">
      {productDetails.map((item, index) => (
        <div key={index} className="card">
          <div className="image ">
            <img src={item.imgdata} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <p className="card-text">{item.pName}</p>
            <p className="card-text">${item.price}</p>
          </div>
          <div className="flex">
            <button
              onClick={() => {
                dispatch(
                  addItem({
                    name: item.pName,
                    price: item.price,
                  })
                );
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
