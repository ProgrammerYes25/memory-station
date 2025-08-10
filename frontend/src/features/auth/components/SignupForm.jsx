import React, {useState} from "react";
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import SingupInputForm from '../components/SignupInputForm'
import SingupTermeForm from '../components/SignupTermeForm'
import WelcomePage from '../components/WelcomePage'

const MODES ={
    LOGIN:'login',
    SINGUP_TERMS: 'singup_terme',
    SINGIP_FORM: 'singup_form'
}

function SignupForm () {
    let [mode, setMode] = useState(MODES.SINGUP_TERMS);

    const handleGoToRegister = () => {
        setMode(MODES.SINGUP_TERMS); // 로그인 페이지에서 회원가입 버튼 클릭 시
    }
    const handleNextFromTerms = () => {
        setMode(MODES.SINGUP_FORM); // 약관 동의 후 회원가입 폼으로 전환
    };
    const handleWelcomePage =() =>{
        setMode(MODES.LOGIN)
    }

    return(
        <div className="App">
            <header className="App-header">
                <h1>회원가입</h1>
            </header>
            <main>
                {mode === MODES.SINGUP_TERMS && (
                    <div>
                        <SingupTermeForm onNext={handleNextFromTerms} />
                    </div>
                )}
                {mode === MODES.SINGUP_FORM && (
                    <div>
                        <SingupInputForm onNext={handleWelcomePage} />
                        <button onClick={handleGoToRegister} className="link-button back-button">
                        ← 이전
                        </button>
                    </div>
                )}
                {mode === MODES.LOGIN &&(
                    <div>
                        <WelcomePage onNext={handleWelcomePage} />
                    </div>
                )}
            </main>

        </div>
      
    );
};

export default SignupForm;