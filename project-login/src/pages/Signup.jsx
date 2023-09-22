import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function SignUp() {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBloodType, setSelectedBloodType] = useState('');
  const [location, setLocation] = useState('');
  const [mbti, setMbti] = useState('');

  // 알림창(에러 메시지)
  const [idMessage, setIdMessage] = React.useState("");
  const [nameMessage, setNameMessage] = React.useState("");
  const [passwordMessage, setPasswordMessage] = React.useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    React.useState("");
  const [emailMessage, setEmailMessage] = React.useState("");
  const [phoneMessage, setPhoneMessage] = React.useState("");
  const [birthMessage, setBirthMessage] = React.useState("");

  // 유효성 검사
  const [isId, setIsId] = React.useState(false);
  const [isname, setIsName] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
  const [isEmail, setIsEmail] = React.useState(false);
  const [isPhone, setIsPhone] = React.useState(false);


  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요.");
      setIsId(false);
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
      setIsId(true);
    }
  };

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);

    if (currentName.length < 2 || currentName.length > 8) {
      setNameMessage("닉네임은 2글자 이상 8글자 이하로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("사용가능한 닉네임 입니다.");
      setIsName(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 사용해서 8자리 이상 입력해주세요."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("사용 가능한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };
  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 같지 않습니다.");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("같은 비밀번호를 입력했습니다.");
      setIsPasswordConfirm(true);
    }
  };
  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("사용 가능한 이메일입니다.");
      setIsEmail(true);
    }
  };
  const onChangePhone = (getNumber) => {
    const currentPhone = getNumber;
    setPhone(currentPhone);
    const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (!phoneRegExp.test(currentPhone)) {
      setPhoneMessage("올바른 형식이 아닙니다.");
      setIsPhone(false);
    } else {
      setPhoneMessage("사용 가능한 번호입니다.");
      setIsPhone(true);
    }
  };

  const addHyphen = (e) => {  // 전화번호 - 자동 추가
    const currentNumber = e.target.value;
    setPhone(currentNumber);
    if (currentNumber.length == 3 || currentNumber.length == 8) {
      setPhone(currentNumber + "-");
      onChangePhone(currentNumber + "-");
    } else {
      onChangePhone(currentNumber);
    }
  };

  const onChangeBirth = (e) => {
    const currentBirth = e.target.value;
    setBirth(currentBirth);
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleBloodTypeChange = (e) => {
    setSelectedBloodType(e.target.value);
  };


  return (
    <>
      <div className="form-container">
        <img src="/elephant.png" alt="로고" style={{ width: '150px', height: 'auto' }} />

        <h3></h3>
        <div className="form">
          <div className="form-el">
            <label htmlFor="id">아이디</label> <br />
            <input id="id" name="id" value={id} onChange={onChangeId} />
            <p className="message"> {idMessage} </p>
          </div>

          <div className="form-el">
            <label htmlFor="name">닉네임</label> <br />
            <input id="name" name="name" value={name} onChange={onChangeName} />
            <p className="message">{nameMessage}</p>
          </div>
          <div className="form-el">
            <label htmlFor="password">비밀번호</label> <br />
            <input
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
            <p className="message">{passwordMessage}</p>
          </div>
          <div className="form-el">
            <label htmlFor="passwordConfirm">비밀번호 확인</label> <br />
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
            />
            <p className="message">{passwordConfirmMessage}</p>
          </div>
          <div className="form-el">
            <label htmlFor="email">이메일</label> <br />
            <input
              id="email"
              name="name"
              value={email}
              onChange={onChangeEmail}
            />
            <p className="message">{emailMessage}</p>
          </div>
          <div className="form-el">
            <label htmlFor="phone">휴대전화번호</label> <br />
            <input id="phone" name="phone" value={phone} onChange={addHyphen} />
            <p className="message">{phoneMessage}</p>
          </div>
          <div className="form-el">
            <label htmlFor="birth">생일</label> <br />
            <input
              id="birth"
              name="birth"
              type="date"
              value={birth}
              onChange={onChangeBirth}
            />
            <p className="message">{birthMessage}</p>
          </div>


          <div className="form-el">
            <label>성별</label> <br />
            <div className="gender-options">
              <div className="gender-option">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={selectedGender === 'male'}
                  onChange={handleGenderChange}
                />
                <label htmlFor="male">남</label>
              </div>
              <div className="gender-option">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={selectedGender === 'female'}
                  onChange={handleGenderChange}
                />
                <label htmlFor="female">여</label>
              </div>
            </div>

            <div className="blood-type">
              <label>혈액형</label> <br />
              <select
                id="bloodType"
                name="bloodType"
                value={selectedBloodType}
                onChange={handleBloodTypeChange}
              >
                <option value="A">A형</option>
                <option value="B">B형</option>
                <option value="AB">AB형</option>
                <option value="O">O형</option>
              </select>
            </div>
          </div>




          <br />
          <br />
          <button type="submit">가입하기</button>
        </div>
      </div>
    </>
  );
};

export default SignUp;