package com.arshad.rentacar.demoapplication.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arshad.rentacar.demoapplication.model.Student;
import com.arshad.rentacar.demoapplication.repository.StudentRepository;
@Service
public class StudentServiceImpl implements StudentService{
	
	@Autowired
	StudentRepository studentrepository;
	
	@Override
	public Student save(Student student) {
		return studentrepository.save(student);
	}
	@Override
	public Student fetchStudentbyId(int id) {
		Optional<Student> student=studentrepository.findById(id);
		if(student.isPresent()) {
			return student.get();
		}
		return null;
	}

}
