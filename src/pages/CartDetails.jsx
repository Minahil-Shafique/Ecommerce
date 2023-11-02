import React from "react";
import productDetails from "../components/productDetails";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import Header from "../components/Header";

function CartDetails() {
  const cartItems = useSelector((state) => state.cart.itemsList);

  return (
    <>
      <Header />
      <h1 className="flex">Your Cart</h1>
    </>
  );
}

export default CartDetails;
