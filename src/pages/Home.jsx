import {Products} from '../products'


function Home({user}) {
  
  return (
    <>
    <div className='text-center mt-4'>
    <h3>Best Sellers</h3>
    <p>Explore our wide range of products, what you're looking for is here.</p>
    </div>
    <Products user={user}/>
    
    </>
  )
}

export default Home