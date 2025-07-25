package com.capmonite.backend.user.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="user_table")
public class User {
    @Id
    @Column(name="user_id", nullable = false)
    private String userid;

    @Column(name="user_name", nullable = false)
    private String username;

    @Column(name="password", nullable = true)
    private String password;

    @Column(name="email", nullable = false)
    private String email;

    @Column(name="social_login_token", nullable = true)
    private String socialLoginToken ;

    @Column(name="birthdate", nullable = false)
    private String birthdate;

    public User(String userid, String username,
                String password, String email,
                String birthdate,String socialLoginToken){
        this.userid = userid;
        this.username = username;
        this.password = password;
        this.email = email;
        this.birthdate = birthdate;
        this.socialLoginToken = socialLoginToken;
    }
}
