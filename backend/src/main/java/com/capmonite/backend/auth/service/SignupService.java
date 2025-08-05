package com.capmonite.backend.auth.service;

import com.capmonite.backend.auth.domain.dto.UserSigupDto;
import com.capmonite.backend.auth.repostiory.SignupRepository;
import com.capmonite.backend.user.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SignupService {
    private SignupRepository signupRepository;

    @Autowired
    public SignupService(SignupRepository signupRepository) {
        this.signupRepository = signupRepository;
    }

    @Transactional
    public void registerUser(UserSigupDto registerDto){
        if(signupRepository.existsByUserid(registerDto.getUserid())) {
            throw new IllegalArgumentException("* 이미사용중인 아이디 입니다.");
        }

        User newUser = new User(
                registerDto.getUserid(),
                registerDto.getUserName(),
                registerDto.getPassword(),
                registerDto.getUserEmail(),
                registerDto.getBirthdate(),
                registerDto.getSocialLoginToken()
        );

        signupRepository.save(newUser);
    }

    public boolean checkUserId(String userid){
        return signupRepository.existsByUserid(userid);
    }
}
