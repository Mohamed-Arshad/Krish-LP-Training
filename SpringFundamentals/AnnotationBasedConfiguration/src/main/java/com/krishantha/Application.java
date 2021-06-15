package com.krishantha;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.krishantha.training.salesmanager.model.Employee;
import com.krishantha.training.salesmanager.service.EmployeeService;

public class Application {
	public static void main(String args[]) {
		ApplicationContext applicationContext= new ClassPathXmlApplicationContext("app.xml");
		
		EmployeeService employeeService=(EmployeeService)applicationContext.getBean("employeeService");
		List<Employee> employees= employeeService.getAllEmployees();
		
		for(Employee employee: employees) {
			System.out.println(employee.getEmployeename()+" at "+employee.getEmployeeLocation());
		}
	}
}
