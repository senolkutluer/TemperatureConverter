import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

function Category({ user }) {
  const { categoryID } = useParams();
  const [categoryName, setCategoryName] = useState('');
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/categories/${categoryID}`)
      .then(res => res.json())
      .then(res => {
        setCategoryName(res.name);
      })
      .catch(err => console.log(err));

    fetch(`https://api.escuelajs.co/api/v1/categories/${categoryID}/products`)
      .then(res => res.json())
      .then(res => {
        setCategoryProducts(res);
      })
      .catch(err => console.log(err));
  }, [categoryID]);

  return (
    <>
      {categoryName && typeof categoryName === 'string' && (
        <>
          <h1 className='text-center'>{categoryName.toUpperCase()}</h1>
          <div className='row row-cols-sm-3 row-cols-md-4'>
            {categoryProducts.map(item => (
              <ProductCard key={item.id} item={item} user={user}/>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Category;
