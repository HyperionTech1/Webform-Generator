package com.HyperionTechApi.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.HyperionTechApi.springboot.entity.User;
import com.HyperionTechApi.springboot.exeception.ResourceNotFoundException;
import com.HyperionTechApi.springboot.repository.UserRespository;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/users")  // maybe "/api/v1/"
public class UserController {
	
	@Autowired
	private UserRespository userRepository;

	//get all users
	@GetMapping
	public List<User> getAllUsers(){
		return this.userRepository.findAll();
		//return userRepository.findAll();
	}
	//get user by id rest api
	@GetMapping("/{id}") // id is the path variable
	public User getUserById(@PathVariable (value = "id") long userId) {
		return this.userRepository.findById(userId).orElseThrow(() -> new 
				ResourceNotFoundException("Element (formerly called User) not Found with id:"+ userId));
	}
	//create user rest api
	@PostMapping
	public User createUser(@RequestBody User user) {
		return this.userRepository.save(user);
	}
	//update user rest api
	//https://www.youtube.com/watch?v=voJAjtioNN8&list=PLGRDMO4rOGcNLnW1L2vgsExTBg-VPoZHr&index=17&ab_channel=JavaGuides
	// at 3:00 minute mark he shows different code than what we have
	@PutMapping("/{id}")
	public User updateUser(@RequestBody User user,@PathVariable("id") long userId) {
		User existingUser = this.userRepository.findById(userId).orElseThrow(() -> new 
				ResourceNotFoundException("User not Found with id:"+ userId));

		existingUser.setWebformID(user.getWebformID());
		existingUser.setButtonID(user.getButtonID());
		existingUser.setButtonDescription(user.getButtonDescription());
		existingUser.setButtonAnswer(user.getButtonAnswer());
		existingUser.setTextboxID(user.getTextboxID());
		existingUser.setTextboxDescription(user.getTextboxDescription());
		existingUser.setTextboxAnswer(user.getTextboxAnswer());
		existingUser.setCheckboxID(user.getCheckboxID());
		existingUser.setCheckboxDescription(user.getCheckboxDescription());
		existingUser.setCheckboxAnswer(user.getCheckboxAnswer());
		//save to database
		return this.userRepository.save(existingUser);
	}
	//delete user rest api
	//https://www.youtube.com/watch?v=dzgixz4X1KA&list=PLGRDMO4rOGcNLnW1L2vgsExTBg-VPoZHr&index=21&ab_channel=JavaGuides
	// he shows different code than what we have
	@DeleteMapping("/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable("id") long userId){
		User existingUser = this.userRepository.findById(userId).orElseThrow(() -> new 
				ResourceNotFoundException("User not Found with id:"+ userId));
		this.userRepository.delete(existingUser);
		return ResponseEntity.ok().build();
	}
}
