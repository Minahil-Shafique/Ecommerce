import React, { useState, useEffect } from "react";
import productDetails from "./productDetails";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

function Product(props) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.itemsList);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const sortedProducts = [...productDetails];

    if (props.sortingCriteria === "price") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (props.sortingCriteria === "name") {
      sortedProducts.sort((a, b) => a.pName.localeCompare(b.pName));
    }

    setProducts(sortedProducts);
  }, [props.sortingCriteria]);

  return (
    <div className="product ">
      {products.map((item, index) => (
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
                const quantity = 1; // Set the quantity as needed
                const totalPrice = quantity * item.price; // Calculate total price

                dispatch(
                  addItem({
                    name: item.pName,
                    price: item.price,
                    quantity,
                    totalPrice,
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
