package com.capmonite.backend.test.Controlller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController{
    @GetMapping("/test")
    public String test(){
        return "안녕하세요! 축하합니다.!";
    }
}