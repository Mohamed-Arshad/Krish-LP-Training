package com.krishantha;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.krishantha.training.salesmanager.repository.EmployeeRepository;
import com.krishantha.training.salesmanager.repository.HibernateEmployeeRepositoryImpl;
import com.krishantha.training.salesmanager.service.EmployeeService;
import com.krishantha.training.salesmanager.service.EmployeeServiceImpl;

@Configuration
@ComponentScan("com.krishantha")
public class ApplicationConfiguration {
	@Bean(name="employeeService")
	public EmployeeService getEmployeeService() {
		return new EmployeeServiceImpl();
	}
	
	@Bean(name="employeeRepository")
	public EmployeeRepository getEmployeeRepository() {
		return new HibernateEmployeeRepositoryImpl();
	}
}
