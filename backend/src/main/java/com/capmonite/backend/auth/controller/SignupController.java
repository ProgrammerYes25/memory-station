package com.capmonite.backend.auth.controller;

import com.capmonite.backend.auth.domain.dto.UserSigupDto;
import com.capmonite.backend.auth.repostiory.SignupRepository;
import com.capmonite.backend.auth.service.SignupService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

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
        }catch (IllegalArgumentException e) {
            // 비밀번호 불일치, 아이디 중복 등 비즈니스 로직 오류를 400 Bad Request로 응답
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            // 그 외 예상치 못한 서버 오류
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("회원가입 중 서버 오류 발생: " + e.getMessage());
        }
    }

    @GetMapping("/check-id")
    public ResponseEntity<Map<String, Boolean>> checkUserId(@RequestParam String userid){
        boolean idDuplicated = signupService.checkUserId(userid);
        Map<String, Boolean> response = new HashMap<>();
        response.put("idDuplicated", idDuplicated);
        return ResponseEntity.ok(response);
    }

}
