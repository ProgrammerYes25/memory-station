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


    const [passwordCheckMessage, setPasswordCheckMessage] = useState('* 영문, 숫자, 특수문자를 포함한 8글자 이상의 비밀번호를 입력하십시오');
    const [passwordAvailable, setPasswordAvailable] = useState(false);
    
    const {signup, checkUserId, idAvailable, setIdAvailable, idCheckMessage, setIdCheckMessage, message, setMessage} = useAuth(); 
    
    const dataSubmit = (e) =>{
        e.preventDefault();
        signup(userid, password, passwordCheck, username, birthdate, useremail);
    };

    const handleIdChange = (e) =>{
        setUserid(e.target.value);
        setIdCheckMessage('');
        setIdAvailable(false);
    };
    
    const handlePasswordChange = (e) =>{
        const newPassword = e.target.value
        setPassword(newPassword);
        if(newPassword.length < 8 || newPassword.length > 30){
            setPasswordCheckMessage('* 글자수가 8글자 이상이어야 합니다.');
            setPasswordAvailable(false);
        }else if(newPassword != passwordCheck){
            setPasswordCheckMessage('* 비밀번호가 일치하지 않습니다.');
            setPasswordAvailable(false);
        }else if(newPassword == passwordCheck){
            setPasswordCheckMessage('');
            setPasswordAvailable(true);
        }else {
            setPasswordCheckMessage('* 영문, 숫자, 특수문자를 포함한 8글자 이상의 비밀번호를 입력하십시오');
            setPasswordAvailable(false);
        }
    };
    
    const handlePasswordCheckChange = (e) =>{
        const newPasswordCheck = e.target.value
        setPasswordCheck(newPasswordCheck);
        if(password != newPasswordCheck){
            setPasswordCheckMessage('* 비밀번호가 일치하지 않습니다.');
            setPasswordAvailable(false);
        }else if(password == newPasswordCheck){
            setPasswordCheckMessage('');
            setPasswordAvailable(true);
        }else {
            setPasswordCheckMessage('* 영문, 숫자, 특수문자를 포함한 8글자 이상의 비밀번호를 입력하십시오');
            setPasswordAvailable(false);
        }
        console.log(password+", "+newPasswordCheck);
        console.log(passwordCheckMessage);
    };

    return(
        <div className="login-form">
            <form onSubmit={dataSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        id="userid"
                        value={userid}
                        onChange={handleIdChange}
                        placeholder="아이디"
                        required
                   />
                   <button type="button" onClick={()=>checkUserId(userid)}>중복확인</button>
                    {idCheckMessage && <p style={{color:idAvailable ? 'green' : 'red'}}>{idCheckMessage}</p>}
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="비밀번호"
                        required
                   />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="password-check"
                        value={passwordCheck}
                        onChange={handlePasswordCheckChange}
                        placeholder="비밀번호 확인"
                        required
                   />
                </div>
                 {passwordCheckMessage && <p style={{color:passwordAvailable ? 'gray' : 'red'}}>{passwordCheckMessage}</p>}

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
                {message && <p style={{color:'red'}}>{message}</p>}
            </form>
        </div>
    );
};

export default SignupForm;