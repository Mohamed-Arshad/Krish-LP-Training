package com.arshad.rentacar.demoapplication.repository;
import com.arshad.rentacar.demoapplication.model.Student;

import org.springframework.data.repository.Repository;

public interface StudentRepository extends Repository<Student,Integer>{
	Student save(Student student);
}
