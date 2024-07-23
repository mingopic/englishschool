package com.englishSchool.repository;

import com.englishSchool.model.Person;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> {
    Optional<Person> findByPersonId(Long PersonId);
}
