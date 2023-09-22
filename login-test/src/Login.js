import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-page">
      <div className="login-page-main"></div>
      <div className="login-page__list"></div>
      <div className="login-box">
        <img src="../resources/elephant.png" alt="Elephant" />
        <input type="text" className="login-input" placeholder="아이디" />
        <input type="password" className="login-input" placeholder="비밀번호" />
        <button className="login-button">로그인</button>
      </div>
    </div>
  );
}

export default Login;