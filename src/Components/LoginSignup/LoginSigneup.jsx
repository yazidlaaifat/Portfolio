import React from 'react';
import './LoginSigneup.css';
import login_icon from '../Assets/360_F_428950438_huH4H4ljvjUNHmihS5c1Zz8KvlGpGISo.jpg';

const LoginSigneup = () => {
  return (
    <div className='Container'>
      <div className="header">
        <img src={login_icon} alt="" />
        <div className="text">Sign up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input type="text" />
        </div>
        <div className="input">
          <input type="email" />
        </div>
        <div className="input">
          <input type="password" />
        </div>
        <div className="input">
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default LoginSigneup;

