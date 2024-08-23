import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { HashLoader } from "react-spinners";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  const getProductDetail = async () => {
    const url = `https://my-json-server.typicode.com/kassy63/HNM-Router-Practice/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return product ? (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="mb-3 d-flex justify-content-center">
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={product.img} alt={product.title} />
          </Card>
        </Col>
        <Col md={6}>
          <p className="text-muted">
            {product.new ? "신제품" : "Regular Item"}
          </p>
          <h2>{product?.title}</h2>
          <h3>{product?.price}원</h3>
          <p className="text-success ">
            {product.choice ? "Conscious choice" : "Standard Option"}
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>사이즈</Form.Label>
              <Form.Select
                aria-label="Select size"
                style={{ width: "200px" }}
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">사이즈 선택</option>
                {product.size &&
                  product.size.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
            <Button type="submit" variant="dark" className="w-100">
              추가
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <HashLoader color="red" loading={true} />
    </Container>
  );
};

export default ProductDetail;
