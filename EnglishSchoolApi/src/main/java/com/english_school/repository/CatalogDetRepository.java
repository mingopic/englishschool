package com.english_school.repository;

import com.english_school.model.CatalogDet;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CatalogDetRepository extends JpaRepository<CatalogDet, Long> {
    @Query("SELECT c FROM CatalogDet c WHERE c.CatId = ?1")
    public List<CatalogDet> findAllByCatId(Long catId);
}
