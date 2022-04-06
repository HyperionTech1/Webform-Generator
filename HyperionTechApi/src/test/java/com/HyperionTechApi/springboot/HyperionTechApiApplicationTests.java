package com.HyperionTechApi.springboot;
//package org.springframework.beans.factory.annotation;
//package net.codejava;
import org.springframework.beans.factory.annotation.Autowired; //new
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
//public class HyperionTechApiApplication {
public class HyperionTechApiApplication implements CommandLineRunner{

	//might not need this, this is the JDBCTemplate
	@Autowired
	private JdbcTemplate jdbcTemplate; // allows us to connect using jdbc

	public static void main(String[] args) {
		SpringApplication.run(HyperionTechApiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO: Auto-generated method stub
		String sql = "INSERT INTO formfact(ButtonID, CheckBoxID, TextID, FileUploadID, LongerTextID) VALUES (?, ?, ?, ?, ?)";

		int result = jdbcTemplate.update(sql, "999" , "999", "999", "999", "999");

		if(result > 0) {
			System.out.println("A new row has been inserted.");
		}
	}

}
