import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    const url = `https://my-json-server.typicode.com/kassy63/HNM-Router-Practice/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      <Row>
        {productList.map((item) => (
          <Col lg={3}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
