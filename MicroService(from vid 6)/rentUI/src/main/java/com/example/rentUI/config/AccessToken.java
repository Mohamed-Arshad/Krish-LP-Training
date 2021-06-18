package com.example.rentUI.config;


import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;

public class AccessToken {
	public static String getAccessToken() {
		OAuth2AuthenticationDetails authenticationDetais=(OAuth2AuthenticationDetails) SecurityContextHolder.getContext().getAuthentication().getDetails();
		return authenticationDetais.getTokenType().concat(" ").concat(authenticationDetais.getTokenValue());
	}
}
