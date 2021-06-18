package com.example.rentUI.controller;

import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@EnableOAuth2Sso
public class UIcontroller extends WebSecurityConfigurerAdapter {
	
	

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers("/","/wellcome").permitAll().anyRequest().authenticated();
	}

	@RequestMapping(value="/")
	public String loadUI(){
		return "Home";
	}
	
	@RequestMapping(value="/securepage")
	public String loadSecureUI(){
		return "securepage";
	}
	
	@RequestMapping(value="/wellcome")
	public String loadWellcomeUI(){
		return "wellcome";
	}
}
