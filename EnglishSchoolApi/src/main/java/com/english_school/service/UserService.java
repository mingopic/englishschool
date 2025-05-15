package com.english_school.service;

import com.english_school.model.User;
import com.english_school.repository.UserRepository;
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