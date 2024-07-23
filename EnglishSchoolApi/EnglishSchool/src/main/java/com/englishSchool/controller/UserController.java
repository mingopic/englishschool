package com.englishSchool.controller;

import com.englishSchool.model.User;
import com.englishSchool.service.UserService;
import java.util.ArrayList;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
@AllArgsConstructor
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getAll")
    public ArrayList<User> GetAll() {
        return this.userService.GetAll();
    }

    @PostMapping()
    public User Post(@RequestBody User user) {
        return this.userService.Create(user);
    }
}
