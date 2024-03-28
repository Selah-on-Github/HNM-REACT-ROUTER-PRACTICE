import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {  
  const [productList, setProductList] = useState([]); //UI보여주려면 useState
  const getProducts = async() => {
    let url = 'http://localhost:4000/products';
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(()=>{
    //함수
    getProducts();
  },[]);
  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default ProductAll;
