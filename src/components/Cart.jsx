import React from "react";
import { useSelector } from "react-redux";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";

function Cart() {
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);

  return (
    <div className="shoppingCart">
      <Link>
        <Badge badgeContent={cartItems.length} color="primary">
          <Link to="/cart">
            <ShoppingCart size={30} />
          </Link>
        </Badge>
      </Link>
    </div>
  );
}

export default Cart;
