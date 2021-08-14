package com.arshad.rentcloud.services;

import org.springframework.stereotype.Service;

@Service
public class rentProcessServiceImpl implements rentProcessservice {
	@Override
    public boolean validateDL (String dlNumber) {
        return dlNumber.length() > 5;
    }
}
