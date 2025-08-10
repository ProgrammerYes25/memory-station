import axios from "axios";
import { useState, useEffect} from "react";
import { preconnect } from "react-dom";

function useAuth(){
    let [message, setMessage] = useState();
    const [idCheckMessage, setIdCheckMessage] = useState('');
    const [idAvailable, setIdAvailable] = useState(false);

    
    const login =  (userid, password) => {
        console.log("usernmae:"+userid+"password:"+password);  
    };
    const signup = async (userid, password, passwordCheck, username, birthdate, useremail) => {
        console.log("userid: "+userid+" password: "+password+" passwordCheck: "+passwordCheck
            +" username: "+username+" birthdate: "+birthdate+" useremail: "+useremail);
        
        if (password !== passwordCheck){
            setMessage("* 비밀번호가 일치하지 않습니다.")
            return;
        }
            
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
            if (error.response) {
                console.error('* 회원가입 실패 (서버 응답):', error.response.data);
                setMessage(error.response.data);
            } else if (error.request) {
                console.error('* 회원가입 실패 (응답 없음):', error.request);
                setMessage('* 서버에 연결할 수 없습니다. 백엔드 서버가 실행 중인지 확인해주세요.');
            } else {
                console.error('* 회원가입 실패 (요청 설정 오류):', error.message);
                setMessage('* 알 수 없는 오류가 발생했습니다.');
            }
        }
    };

    const checkUserId = async (userid) =>{
        if (userid.trim() === '') {
            setIdCheckMessage('아이디를 입력해주세요.');
            setIdAvailable(false);
            return;
        }

        try {
            const isDuplicated = await checkUserIdDuplication(userid);
            console.log(isDuplicated)
            if (isDuplicated) {
                setIdCheckMessage('이미 사용 중인 아이디입니다.');
                setIdAvailable(false);
            } else {
                setIdCheckMessage('사용 가능한 아이디입니다.');
                setIdAvailable(true);
            }
        } catch (error) {
            setIdCheckMessage('중복확인 중 오류가 발생했습니다.');
            setIdAvailable(false);
            console.error('아이디 중복확인 오류:', error);
        }
    };

    const checkUserIdDuplication  = async (userid) =>{
        try{
            const response = await axios.get(`/api/auth/check-id?userid=${userid}`);
            return response.data.idDuplicated;
        }catch(error){
            if (error.response && error.response.status === 409) {
                return true; 
            }
            console.error('아이디 중복확인 요청 실패:', error.response ? error.response.data : error.message);
            throw new Error(error.response ? error.response.data.message : '아이디 중복확인 중 오류가 발생했습니다.');
        }
    }
    return {login, signup, checkUserId, message, setMessage, idCheckMessage, setIdCheckMessage, idAvailable, setIdAvailable };
}
export default useAuth;