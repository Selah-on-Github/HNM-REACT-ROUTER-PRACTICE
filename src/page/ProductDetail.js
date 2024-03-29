import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    
    let {id} = useParams();

    const[product,setProduct] = useState(null);

    const getProductDetail= async () => {
      let url = `http://localhost:4000/products/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      setProduct(data);
    };
    // useEffect는 항상 변수2개를 받는다.(함수 하나랑, 어레이 하나를 받는다.)
    useEffect(() => {
      getProductDetail();
    }, []);

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} alt='상품 이미지'/>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
