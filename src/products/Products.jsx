import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";



function Products({user}) {
  const [last12Products, setlast12Products] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=12&limit=12")
      .then((res) => res.json())
      .then((res) => setlast12Products(res));
  },[]);
  return (
    <>
      
      <ul className="mt-5">
        <div className="row row-cols-sm-2 row-cols-md-3">
          {last12Products.map((product) => (
            <ProductCard key={product.id} item={product} user={user} />

          ))}
        </div>
      </ul>
    </>
  );
}

export default Products;
