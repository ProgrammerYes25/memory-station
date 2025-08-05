package com.capmonite.backend.auth.repostiory;


import com.capmonite.backend.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignupRepository extends JpaRepository<User, Long> {
    boolean existsByUserid(String userid);
}
