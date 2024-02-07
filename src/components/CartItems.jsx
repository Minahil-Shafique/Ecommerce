import React from "react";
import { useSelector } from "react-redux";
import productDetails from "./productDetails";
function CartItems(props) {
  const cartItems = useSelector((state) => state.cart.itemsList);

  return (
    <div className="cart-items">
      {cartItems.map((product, index) => {
        const productDetail = productDetails.find(
          (item) => item.id === product.id
        );

        return (
          <div
            className="card mb-3"
            style={{
              maxWidth: "550px",
              margin: "10px",
            }}
            key={index}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={product.imgdata}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.pName}</h5>
                  <p className="card-text">{product.pName}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {product.price}
                      <br />
                      {product.rating}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartItems;
