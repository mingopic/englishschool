package com.english_school.repository;

import com.english_school.model.Person;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> {
    Optional<Person> findByPersonId(Long PersonId);
}
