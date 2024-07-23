package com.englishSchool.service;

import com.englishSchool.model.User;
import com.englishSchool.repository.UserRepository;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public ArrayList<User> GetAll() {
        return (ArrayList<User>) userRepository.findAll();
    }

    public User Create(User user) {
        return userRepository.save(user);
    }
}
