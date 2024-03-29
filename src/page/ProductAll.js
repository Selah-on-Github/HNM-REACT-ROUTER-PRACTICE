import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {  
  const [productList, setProductList] = useState([]); //UI보여주려면 useState
  const [query, setQuery] = useSearchParams();
  const getProducts = async() => {
    let searchQuery = query.get('q')||"";
    console.log("쿼리값은?", searchQuery);
    let url = `http://localhost:4000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(()=>{
    //함수
    getProducts();
  },[query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
