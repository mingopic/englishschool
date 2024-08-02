package com.englishSchool.controller;

import com.englishSchool.service.CatalogDetService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/catalogDet")
@AllArgsConstructor
public class CatalogDetController {

    @Autowired
    private final CatalogDetService catalogDetService;

    @GetMapping("/GetAllByCatId")
    public ResponseEntity<?> GetAllByCatId(@RequestParam Long catId) {
        return ResponseEntity.ok(this.catalogDetService.GetByCatId(catId));
    }
}
