import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
          <Form className="p-4 border rounded shadow-sm">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>이메일</Form.Label>
              <Form.Control type="email" placeholder="이메일" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" placeholder="비밀번호" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Button type="submit" className="w-100">
                로그인
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
