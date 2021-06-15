package com.arshad.springboot_docker.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {
	
	@RequestMapping("/")
	public String greeting() {
		return "<h1>I'm running on Docker</h1>";
	}
}
