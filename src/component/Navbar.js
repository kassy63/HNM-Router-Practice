import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서
      const keyword = event.target.value;

      // url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <Button variant="light" onClick={handleAuthAction}>
          {authenticate ? "로그아웃" : "로그인"}
        </Button>
      </div>
      <div className="nav-section">
        <img
          className="logo"
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
          onClick={goToHome}
        />
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="close-button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <ul className="sidebar-menu-list">
          {menuList.map((menu, index) => (
            <li key={index} onClick={toggleSidebar}>
              {menu}
            </li>
          ))}
        </ul>
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="검색"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
