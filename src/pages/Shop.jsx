import React, {useState} from "react";
import Product from "../components/Product";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";

function Shop() {
  const [sortingCriteria, setSortingCriteria] = useState('price');

  return (
    <>
      <Header />
      <Dropdown onChange={(e)=>setSortingCriteria(e)} />
      <Product sortingCriteria={sortingCriteria} />
    </>
  );
}

export default Shop;
