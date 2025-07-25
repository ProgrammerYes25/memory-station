import axios from "axios";
import { useState, useEffect} from "react";
import { preconnect } from "react-dom";

function useAuth(){
    const login =  (userid, password) => {
        console.log("usernmae:"+userid+"password:"+password);  
    };
    const signup = async (userid, password, passwordCheck, username, birthdate, useremail) => {
        console.log("userid: "+userid+" password: "+password+" passwordCheck: "+passwordCheck
            +" username: "+username+" birthdate: "+birthdate+" useremail: "+useremail);  
        try{
            const response = await axios.post('/api/auth/signup',{
                'userid': userid,
                'password': password,
                'userName': username, 
                'birthdate': birthdate,
                'userEmail': useremail
            },{
                headers:{
                    'Content-Type':'application/json'
                }
            });
            console.log('회원가입 성공:', response.data);
        }catch(error){
            console.error('회원가입 실패 (요청 설정 오류):', error.message);
            setMessage('알 수 없는 오류가 발생했습니다.');
        }
    };
    return {login, signup};
}
export default useAuth;