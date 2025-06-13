package com.example.demo.model;

public class UserModel {
	
	int userid;
	String username;
	String role;
	public UserModel(int userid, String username, String role) {
		super();
		this.userid = userid;
		this.username = username;
		this.role = role;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
}
