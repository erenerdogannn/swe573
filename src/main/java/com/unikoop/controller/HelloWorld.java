package com.unikoop.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Eren on 17/05/16.
 */
@RestController
public class HelloWorld {

    @RequestMapping("/")
    public String sayHello() {
        return "Hello World";
    }
}
