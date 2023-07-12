import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Config } from './Config';
import Loading from './Loading';
import ProductCard from './ProductCard';


const Products = () => {
  const [product,setProduct]=useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(()=>{
    Prod()
  },[])

  let Prod = async () => {
    try {
      setLoading(true);
      let prods = await axios.get(`${Config.api}/getproduct`);
      console.log(prods)
      setProduct(prods.data.product);
      setLoading(false);
    } catch (error) {
      alert("Something went wrong");
    }
  };
  
  return (
    <div className='container'>
      <div className='row'>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {product.map((item, index) => {
              return <ProductCard key={index} item={item} />;
            })}
          </>
        )}
      </div>
    </div>
  );
  
}

export default Products
