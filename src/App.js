import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import PrivateRoute from "./rote/PrivateRoute";

// 1. 전체 상품 페이지, 로그인, 상품 상세 페이지
// 1-1. 네비게이션 바

// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다
// install: npm i json-server@0.17.4
// win: json-server --watch db.json --port 5000 안되면 npx 앞에 추가하고 실행
// mac: json-server --watch db.json --port 4000
// db: https://gist.github.com/legobitna/24cf11ae95d53c9cdcdc7b0040f059e9

// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다

// 3. 상품 디테일을 눌렀으나, 로그인이 안 되어있을 경우에는 로그인 페이지가 먼저 나온다
// 4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다

// 7. 상품을 검색할 수 있다

// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다
// 5. 로그아웃되면 상품 디테일 페이지를 볼 수 없다, 다시 로그인 페이지가 보인다
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃하면 로그인이 보인다

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true면 로그인 처리
  useEffect(() => {
    console.log("setAuthenticate", setAuthenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />

      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
