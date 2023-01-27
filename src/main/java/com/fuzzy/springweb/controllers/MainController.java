package com.fuzzy.springweb.controllers;

import com.fuzzy.springweb.entity.Button;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainController {
    @GetMapping("/")
    public String home2(){
        return "index.html";
    }

//    @RequestMapping("/")
//    public String home(){
//        return "index.html";
//    }
    @PostMapping("/button")
    public void button(){
        Button button = new Button(Integer.parseInt("23"));
        System.out.println(button.getId());
    }


}
