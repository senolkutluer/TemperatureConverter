import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Categories.css'

function Categories()  {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res))
      .catch((error) => console.log("Error fetching categories:", error));
  };

  return (
    <div className="horizontal-categories mt-2">
      <h3>CATEGORİES</h3>
      <div className="category-links">
        {categories.slice(0, 6).map((category, index) => (
          <Link
            key={index}
            className="category-link"
            to={`/products/category/${category.id}`}
          >
            {category.name.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
