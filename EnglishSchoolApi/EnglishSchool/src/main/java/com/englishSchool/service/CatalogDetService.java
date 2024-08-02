package com.englishSchool.service;

import com.englishSchool.model.CatalogDet;
import com.englishSchool.repository.CatalogDetRepository;
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
