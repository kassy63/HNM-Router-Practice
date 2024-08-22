import { Container } from "react-bootstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return item ? (
    <div
      className="product-card"
      onClick={showDetail}
      style={{ cursor: "pointer" }}
    >
      <img className="card-img" src={item?.img} alt={item?.title} />
      <div>{item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}원</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  ) : (
    <Container className="d-flex justify-content-center align-items-center">
      <HashLoader color="red" loading={true} />
    </Container>
  );
};

export default ProductCard;
