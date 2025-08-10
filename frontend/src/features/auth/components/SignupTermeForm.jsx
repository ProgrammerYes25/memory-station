import React, { useState } from 'react';

const SignupTermeForm = ({ onNext }) => {
  const [agreed, setAgreed] = useState(false);

  const handleNext = () => {
    if (agreed) {
      onNext(); // 약관에 동의했으므로 다음 단계로 진행
    } else {
      alert('이용약관에 동의해야 회원가입을 진행할 수 있습니다.');
    }
  };

  return (
    <div className="terms-container">
      <h2>이용약관 동의</h2>
      <div className="terms-content">
        <p>본 서비스 이용약관에 동의해 주시기 바랍니다.</p>
        <p>1. 개인정보 수집 및 이용 동의...</p>
        <p>2. 서비스 이용규칙...</p>
      </div>
      <div className="agreement-checkbox">
        <input
          type="checkbox"
          id="agreement"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <label htmlFor="agreement">이용약관에 동의합니다.</label>
      </div>
      <button onClick={handleNext} className="next-button">
        다음 단계
      </button>
    </div>
  );
};

export default SignupTermeForm;
