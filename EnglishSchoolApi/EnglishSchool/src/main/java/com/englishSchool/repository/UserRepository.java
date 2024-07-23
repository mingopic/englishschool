package com.englishSchool.repository;

import com.englishSchool.model.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findOneByUserName(String UserName);
}
