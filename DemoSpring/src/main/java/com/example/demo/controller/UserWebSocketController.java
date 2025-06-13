package com.example.demo.controller;

import com.example.demo.model.UserModel;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

@Controller
public class UserWebSocketController {

    @MessageMapping("/adduser") // client sends to /app/adduser
    @SendTo("/topic/users")     // broadcast to /topic/users
    public UserModel send(UserModel user) {
        return user; // Just echoing back
    }
}
