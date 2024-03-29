import {useEffect, useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import PrivateRoute from "./route/PrivateRoute";

//1. 전체 상품페이지, 로그인, 상품상세페이지.
//1-1. 네이게이션바
//2. 전체 상품페이지에서는 전체상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인페이지가 나온다.
//4. 상품디테일을 눌렀으나, 로그인이 안되있을경우에는 로그인페이지가 먼저 나온다. (상품디테일 페이지는 로그인한 회원들만 보여지게 할 것이다.)

//5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//7. 로그아웃이 되면 상품디테일페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
//8. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
//9. 상품을 검색할 수 있다.

function App() {
  
  // 로그인 버튼을 누르면 -> authenticate의 값이 true로 바뀌어야 한다.
  const[authenticate,setAuthenticate] = useState(false); //true면 로그인이 됨. false면 로그인이 안됨.
  
  useEffect(()=>{
    console.log("Aaaaa", authenticate);
  },[authenticate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        
        {/* 함수도 props로서 보낼 수 있다. */}
        <Route 
          path="/login" 
          element={<Login setAuthenticate={setAuthenticate} />} 
        />

        <Route 
          path="/product/:id" 
          element={<PrivateRoute authenticate={authenticate} />} 
        />
      </Routes>
    </div>
  );
};

export default App;
