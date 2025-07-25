package com.capmonite.backend.auth.controller;

import com.capmonite.backend.auth.domain.dto.UserSigupDto;
import com.capmonite.backend.auth.repostiory.SignupRepository;
import com.capmonite.backend.auth.service.SignupService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class SignupController {

    private SignupService signupService;

    @Autowired
    public SignupController(SignupService signupService){
        this.signupService = signupService;
    }

    @PostMapping("/signup")
    public  ResponseEntity<String> signup(@Valid @RequestBody UserSigupDto requestDto){
        try{
            signupService.registerUser(requestDto);
            return new ResponseEntity<>("회원가입이 성공적으로 완료 되었습니다.", HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>("서버 오류 : 회원가입 중 문제가 발생했습니다. 잠심 후에 다시 시도해 주세요", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
