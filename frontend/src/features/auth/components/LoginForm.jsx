import React, {useState} from "react";
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth.jsx';


function LoginForm () {
    let [userid, setUserid] = useState('');
    let [password, setPassword] = useState('');
    const {login} = useAuth(); 

    const dataSubmit = (e) =>{
        e.preventDefault();
        login(userid,password);
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
                <button type="submit" className="login-button">로그인</button><br/>
                <Link>아이디 찾기</Link> <Link>비밀번호 찾기</Link> <Link to="/signup">회원가입 하기</Link>
            </form>
        </div>
    );
};

export default LoginForm;