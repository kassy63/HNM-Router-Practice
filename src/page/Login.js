import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
          <Form
            onSubmit={(event) => loginUser(event)}
            className="p-4 border rounded shadow-sm"
          >
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>이메일</Form.Label>
              <Form.Control type="email" placeholder="이메일" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" placeholder="비밀번호" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Button variant="danger" type="submit" className="w-100">
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
