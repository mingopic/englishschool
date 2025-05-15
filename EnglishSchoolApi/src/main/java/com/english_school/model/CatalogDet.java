package com.english_school.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.sql.Timestamp;
import lombok.Data;

@Entity
@Table(name = "Tb_CatalogDet")
@Data
public class CatalogDet {
    @Id
    private Long CatDetId;
    private String Name;
    private String Abbreviation;
    private Boolean Active;
    private String AuxValue;
    private int CatId;
    private Timestamp InsertedDate;
}
