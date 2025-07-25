package com.capmonite.backend.auth.domain.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserSigupDto {

    @NotBlank(message = "아이디는 필수 입력 값입니다.")
    @Size(min = 4, max = 20, message = "아이디는 4자 이상 20자 이하로 입력해주세요.")
    private String userid;

    @NotBlank(message = "비밀 번호는 필수 입력 값입니다.")
    @Size(min = 4, max = 30, message = "비밀 번호는 4자 이상 30자 이하로 입력해주세요.")
    private String password;

    @NotBlank(message = "이메일은 필수 입력 값입니다.")
    @Email(message = "이메일 형태가 아닙니다.")
    private String userEmail;

    private String userName;

    private String birthdate;

    private String socialLoginToken ;
}
