import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'


function Product() {
  const {productId} = useParams()
  const [product, setProduct] = useState({}) 
  useEffect(() => { 
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`) 
    .then(res=>res.json()) 
    .then(json=>setProduct(json))
    
    .catch(err=>console.error(err))
  },[productId])
  
  return (
    
    <>
    <h1 className='text-center'>{product.title}</h1>
    {product.images && product.images.length > 0 && (
      <img src={product.images[0]} alt="" className='w-50 mx-auto d-block img-thumbnail' />
    )}
    <p className='mt-3 mx-5'>
      {product.description}
    </p>
    </>
  )
}

export default Product