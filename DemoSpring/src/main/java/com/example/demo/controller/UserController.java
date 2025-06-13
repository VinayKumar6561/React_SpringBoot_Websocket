//usercontroller
package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.UserModel;
import com.example.demo.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class UserController {

	@Autowired
	UserService usrserv;
	

  
	
	@GetMapping("/firstpath")
	public String firstMethod() {
//		return "Spring Boot";
		return usrserv.display();
	}
	
	@GetMapping("/secondpath/{num}/{name}")
	public String secondMethod(@PathVariable int num,@PathVariable String name) {
		return "Number is :" + num +" and name is : "+name;
	}
	
	
	// http://localhost:8080/thirdpath?id=45&name=Vinay
	@GetMapping("/thirdpath")
	public String thirdMethod(@RequestParam int id,@RequestParam String name) {
		return "Entered id is : "+id +" And name is : "+name;
	}
	
	
	@PostMapping("/insertdata")
	public String insertdatamethod(@RequestBody UserModel usrm) {
	   return usrserv.insertdatamethod(usrm);
	}
	
	@PostMapping("/updatedata")
	public String updatedatamethod(@RequestBody UserModel usrm) {
	   return usrserv.updatedatamethod(usrm);
	}
	
	@PostMapping("/selectdata")
	public List<UserModel> getUsersByRole(@RequestBody UserModel usrm) {
		return usrserv.getUsersByRole(usrm.getRole());
	}
	
	@GetMapping("/selectalldata")
	public List<UserModel> selectalldata() {
		return usrserv.selectdatamethod();
	}
	
	
	
}
