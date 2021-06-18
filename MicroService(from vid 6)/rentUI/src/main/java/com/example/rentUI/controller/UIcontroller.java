package com.example.rentUI.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;

import com.arshad.rentcloud.commons.model.Customer;
import com.example.rentUI.config.AccessToken;


@Controller
@EnableOAuth2Sso
public class UIcontroller extends WebSecurityConfigurerAdapter {
	
	@Autowired
	RestTemplate restTemplate;

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
	
	@RequestMapping(value="/customers")
	public String loadCustomers(Model model){
		
		HttpHeaders httpheaders=new HttpHeaders();
		httpheaders.add("Authorization", AccessToken.getAccessToken());
		HttpEntity<Customer> customerHttpEntity=new HttpEntity<>(httpheaders);
		try {
		ResponseEntity<Customer []> responseEntity=restTemplate.exchange("http://localhost:8181/services/customers",HttpMethod.GET,customerHttpEntity,Customer[].class);
		model.addAttribute("customers",responseEntity.getBody());
		}catch(HttpStatusCodeException ex) {
			ResponseEntity responseEntity= ResponseEntity.status(ex.getRawStatusCode()).headers(ex.getResponseHeaders()).body(ex.getResponseBodyAsString());
			model.addAttribute("error",responseEntity);
		}
		return "securepage";
	}
}
