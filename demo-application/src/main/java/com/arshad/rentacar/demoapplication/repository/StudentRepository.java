package com.arshad.rentacar.demoapplication.repository;
import com.arshad.rentacar.demoapplication.model.Student;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,Integer>{
}
