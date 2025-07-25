import React, {useState} from "react";
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function SignupForm () {
    let [userid, setUserid] = useState('');
    let [password, setPassword] = useState('');
    let [passwordCheck, setPasswordCheck] = useState('');
    let [username, setUsername] = useState('');
    let [birthdate, setBirthdate] = useState('');
    let [useremail, setUseremail] = useState('');
    const {signup} = useAuth(); 
    
    const dataSubmit = (e) =>{
        e.preventDefault();
        signup(userid, password, passwordCheck, username, birthdate, useremail);
    };

    return(
        <div className="login-form">
            <form onSubmit={dataSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        id="userid"
                        value={userid}
                        onChange={(e) => setUserid(e.target.value)}
                        placeholder="아이디"
                        required
                   />   
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) =>  setPassword(e.target.value)}
                        placeholder="비밀번호"
                        required
                   />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="password-check"
                        value={passwordCheck}
                        onChange={(e) =>  setPasswordCheck(e.target.value)}
                        placeholder="비밀번호 확인"
                        required
                   />
                </div>
                <h6>개인 정보</h6>
                <div className="form-group">
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="이름 임력"
                        required
                   />   
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        id="birthdate"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                        placeholder="생년월일"
                        required
                   />   
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        id="useremail"
                        value={useremail}
                        onChange={(e) => setUseremail(e.target.value)}
                        placeholder="이메일"
                        required
                   />   
                </div>
                <button type="submit" className="singup-button">가입 완료</button>
            </form>
        </div>
    );
};

export default SignupForm;