import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  
  // 상단메뉴 array type
  const menuList = [
    "여성", 
    "Divided", 
    "남성", 
    "신생아/유아", 
    "아동", 
    "H&M Home", 
    "Sale", 
    "지속가능성" 
  ];

  // useNavigate가 제공해주는 함수
  const navigate = useNavigate();

  // 로그인페이지로 가도록
  const goToLogin = () => {
    navigate('/login');
  };

  const search = (event) => {
    if(event.key === "Enter") {
      // 입력한 검색어를 읽어와서 . ==> 이벤트 안에 있는, 인풋 안에있는 값을 읽어오는 방법.
      let keyword = event.target.value;
      
      // url을 바꿔준다. //url에 Keyword 넣어준다.
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
      {/* <div style={{display: 'flex', justifyContent: 'center'}}> */}
        <img
          width={100}
          src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg'
          alt='H&M 로고'
        />
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className='search-box'>
            <FontAwesomeIcon icon={faSearch} />

            {/* onKeyPress란? : 아무키나 입력하면 호출이 되는 이벤트. */}
            {/* 모든 이벤트 리스너는 이벤트를 매개변수로 넘겨준다. */}
            <input type="text" onKeyPress={(event)=>search(event)} /> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
