package com.HyperionTechApi.springboot;
import com.HyperionTechApi.springboot.entity.User;
import com.HyperionTechApi.springboot.repository.UserRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class HyperionTechApiApplication implements CommandLineRunner {
    @Autowired UserRespository ob;
    public static void main(String[] args)
    {
        System.out.println("Welcome to the Hyperion technologies Database for w.g.");
        System.out.println("THIS IS A TESTTTTTTT");
        SpringApplication.run(HyperionTechApiApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception
    {
        System.out.println("in peter parker area");
        // Inserting the data in the mysql table.
        User first = new User("PETER", "PARKER");
        // ob.save() method
        System.out.println("yo");
        ob.save(first);
    }
}



/*
This works

package com.HyperionTechApi.springboot;
//package org.springframework.beans.factory.annotation;
//package net.codejava;
//import org.springframework.beans.factory.annotation.Autowired; //new
//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class HyperionTechApiApplication {
//public class HyperionTechApiApplication //implements CommandLineRunner{

	//might not need this, this is the JDBCTemplate
	//@Autowired
	//private JdbcTemplate jdbcTemplate; // allows us to connect using jdbc

	public static void main(String[] args) {
		System.out.println("Welcome to the Hyperion technologies Database for w.g.");
		System.out.println("THIS IS A TESTTTTTTT");
		SpringApplication.run(HyperionTechApiApplication.class, args);
	}
	// new 4/13/2022 6:58pm

/*
	@Override
	public void run(String... args) throws Exception {
		// TODO: Auto-generated method stub
		String sql = "INSERT INTO ageOfPerson (ButtonID, CheckBoxID, TextID, FileUploadID, LongerTextID) VALUES (?, ?, ?, ?, ?)";

		int result = jdbcTemplate.update(sql, "999" , "999", "999", "999", "999");

		if(result > 0) {
			System.out.println("A new row has been inserted.");
		}
	}



}
*/