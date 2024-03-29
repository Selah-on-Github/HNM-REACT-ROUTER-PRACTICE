import React from 'react';
import {Form, Button, Container} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const loginUser = (event) => {
      // Form을 사용하게 되면 항상 event.preventDefault(); 를 써줘라.
      event.preventDefault(); // 페이지가 계속 refresh하는 것을 막을 수 있다. 새로고침 안하게 하는 기능.
      console.log("login user function issue");
      setAuthenticate(true);
      navigate("/");
    };
  return (
    <Container>
      <Form onSubmit={(event)=>loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        {/* Form태그 안에 버튼태그가 있고 타입이 submit인 경우 : onClick사용할 수 없다. ---> onClick대신 onSubmit을 사용한다. */}
        <Button variant="danger" type="submit"> 
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
