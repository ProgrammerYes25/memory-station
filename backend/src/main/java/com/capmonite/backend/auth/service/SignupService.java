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
    public SignupService(SignupRepository signupRepository){
        this.signupRepository = signupRepository;
    }

    public void registerUser(UserSigupDto registerDto){
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
}
