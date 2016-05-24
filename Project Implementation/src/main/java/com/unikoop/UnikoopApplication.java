package com.unikoop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class UnikoopApplication {

	public static void main(String[] args) {

		SpringApplication.run(UnikoopApplication.class, args);
	}
}
