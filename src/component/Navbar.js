import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  
  // 상단메뉴 array type
  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"];

  return (
    <div>
      <div>
        <div className="login-button">
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
          {menuList.map((menu)=>(
            <li>{menu}</li>
          ))}
        </ul>

        <div>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
