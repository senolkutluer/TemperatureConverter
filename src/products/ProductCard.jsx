import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";


function ProductCard({ item, user }) {
  const productUrl = `/products/product/${item.id}`;
  let localFavs = JSON.parse(localStorage.getItem("favs")) ?? [];
  const [isFav, setIsFav] = useState(false); 

  useEffect(() => {
    
    if (localFavs.find(localItem => localItem.id === item.id)) {
      setIsFav(true);
    }
  }, []); 

  function handleClick(product) {
    let itemIndex = localFavs.findIndex((localItem) => product.id === localItem.id);
    if (itemIndex >= 0) {
      localFavs = localFavs.filter((item) => item.id !== product.id);
      setIsFav(false);
    } else {
      localFavs.push({ id: product.id, title: product.title });
      setIsFav(true);
    }
    localStorage.setItem("favs", JSON.stringify(localFavs));
  }

  return (
    <div className="col-sm mb-3">
      <div className="card shadow">
        <Link to={productUrl}>
          <img src={item.images[0]} className="card-img-top" alt={item.title} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{item.title.length > 18 ? item.title.substring(0, 18).concat('...') : item.title}</h5>
          <p className="card-text">{item.description.substring(0, 45)}...</p>
          <p className="lead">{item.price} €</p>
          {user && (
            <button className="btn btn-invisible" onClick={() => handleClick(item)}>
              {isFav ? <FaHeart color="red" /> : <FaRegHeart />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
