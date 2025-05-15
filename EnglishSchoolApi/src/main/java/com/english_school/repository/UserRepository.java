package com.english_school.repository;

import com.english_school.model.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findOneByUserName(String UserName);
}
