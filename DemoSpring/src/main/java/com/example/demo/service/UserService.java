
//userservice
package com.example.demo.service;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import com.example.demo.model.UserModel;

@Service
public class UserService {

   @Autowired
   JdbcTemplate jdt;	
	
   @Autowired
   private SimpMessagingTemplate messagingTemplate; // 💡 Inject this to send messages
	public String display()
	{
		return "THis is from Service class";
	}
	public String insertdatamethod(UserModel usrm)
	{
		  String sql = "INSERT INTO user (userid, username, role) VALUES (?, ?, ?)";
	        int rows = jdt.update(sql, usrm.getUserid(), usrm.getUsername(), usrm.getRole());

	        if (rows > 0) {
	           // 👇 Send user to /topic/users (React will be subscribed to this)
	           messagingTemplate.convertAndSend("/topic/users", usrm);
	           return "User inserted successfully";
	        }
	        return " Insertion failed";
	}
	
	public String updatedatamethod(UserModel usrm)
	{
		  String sql = "update user set role=? where username like '%m'";
	        int rows = jdt.update(sql, usrm.getRole());
	        if (rows > 0) {
	            // Notify updated user (optional, depending on your logic)
	            messagingTemplate.convertAndSend("/topic/users", usrm);
	            return "User Updated successfully";
	        }
	        return  " Updation failed";
	}
	
	public List<UserModel> selectdatamethod()
	{
		String sql="select userid,username,role from user";
		
		return jdt.query(sql , (rs, rowNum) -> new UserModel(
				
				rs.getInt("userid"),
				rs.getString("username"),
				rs.getString("role")
				
				));
	}
	public List<UserModel> getUsersByRole(String role) {
	    String sql = "SELECT * FROM user WHERE role = ?";

	    return jdt.query(sql, (rs, rowNum) -> new UserModel(
	        rs.getInt("userid"),
	        rs.getString("username"),
	        rs.getString("role")
	    ), role);
	}
	
//	public List<Map<String, Object>> getAllUsersAsMap() {
//	    String sql = "SELECT userid, username, role FROM user";
//	    return jdt.queryForList(sql);
//	}
	
	
//	public UserModel getUserById(int id) {
//	    String sql = "SELECT userid, username, role FROM user WHERE userid = ?";
//	    
//	    return jdt.queryForObject(sql, (rs, rowNum) -> new UserModel(
//	        rs.getInt("userid"),
//	        rs.getString("username"),
//	        rs.getString("role")
//	    ), id);
//	}


	
}

