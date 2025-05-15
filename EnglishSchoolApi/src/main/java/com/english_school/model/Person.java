package com.english_school.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.sql.Timestamp;
import lombok.Data;

@Entity
@Table(name = "Tb_Person")
@Data
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PersonId\"")
    private Long personId;
    private String Name;
    private boolean Active;
    private boolean Visible;
    private Timestamp InsertedDate;
    private Timestamp LastDateUpdated;
}
