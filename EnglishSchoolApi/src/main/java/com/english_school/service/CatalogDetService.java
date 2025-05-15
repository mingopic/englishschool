package com.english_school.service;

import com.english_school.model.CatalogDet;
import com.english_school.repository.CatalogDetRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CatalogDetService {

    @Autowired
    CatalogDetRepository catalogDetRepository;

    public List<CatalogDet> GetByCatId(Long catId) {
        return catalogDetRepository.findAllByCatId(catId);
    }
}
