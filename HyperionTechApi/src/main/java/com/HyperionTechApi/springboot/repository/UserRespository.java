package com.HyperionTechApi.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HyperionTechApi.springboot.entity.User;

@Repository
//public interface UserRespository extends  JpaRepository<User, Integer> {
// Repository is spelled wrong here but we went with it because it works- 3Apr22
public interface UserRespository extends JpaRepository<User, Long>{

}
