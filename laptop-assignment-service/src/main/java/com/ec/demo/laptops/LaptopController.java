package com.ec.demo.laptops;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// CREATE A CONTEOLLER class to use rest controller based on spring web
@RestController()
public class LaptopController {

    @Autowired
    LaptopRepository laptopRepository;

    @GetMapping("/")
    List<Laptop> getAllLaptops() {
        return this.laptopRepository.findAll();
    }
}
