import "../App.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sport",
    "Sale",
    "지속가능성",
  ];

  const goToHome = () => {
    navigate("/");
  };
  const handleAuthAction = () => {
    if (authenticate) {
      setAuthenticate(false); // 로그아웃 처리
      navigate("/"); // 홈으로 리디렉트
    } else {
      navigate("/login"); // 로그인 페이지로 이동
    }
  };

  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <Button variant="light" onClick={handleAuthAction}>
            {authenticate ? "로그아웃" : "로그인"}
          </Button>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          style={{ cursor: "pointer" }}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
          onClick={goToHome}
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
