package com.englishSchool.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.sql.Timestamp;
import lombok.Data;

@Entity
@Table(name = "tb_user")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long UserId;
    @Column(name = "UserName")
    private String userName;
    private String Password;
    private boolean Active;
    private Timestamp InsertedDate;
    private Timestamp LastDateUpdated;
    private Long PersonId;
}
