package com.ec.demo.laptops;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LaptopsApplication implements CommandLineRunner {




	@Autowired
	LaptopRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(LaptopsApplication.class, args);
	}

	public void run(String... args) throws Exception {
		// get laptops repsoitory and create few laptops deta
		// save them in the repository

		repository.save(new Laptop("Dell", "Dell-123"));
		repository.save(new Laptop("HP", "HP-123"));
	}
}
