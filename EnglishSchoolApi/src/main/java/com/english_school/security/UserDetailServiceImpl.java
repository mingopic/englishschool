package com.english_school.security;

import com.english_school.model.Person;
import com.english_school.model.User;
import com.english_school.repository.PersonRepository;
import com.english_school.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PersonRepository personRepository;

    @Override
    public UserDetails loadUserByUsername(String UserName) throws UsernameNotFoundException {
        Person person = new Person();
        User user = new User();
        try {
            user = userRepository
                    .findOneByUserName(UserName)
                    .orElseThrow(() -> new UsernameNotFoundException("El usuario" + UserName + " no existe."));

            person = personRepository.findByPersonId(user.getPersonId())
                    .orElseThrow(() -> new UsernameNotFoundException(String.format("No hay una persona asignada para el usuario ", UserName)));
        } catch (RuntimeException e) {
            System.out.println("Excepción capturada: " + e.getMessage());
        }
        return new UserDetailsImpl(user, person);
    }
}
