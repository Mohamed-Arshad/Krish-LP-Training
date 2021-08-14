package lk.arshad.rentcloud.rentservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lk.arshad.rentcloud.model.rent.Rent;

import javax.persistence.criteria.CriteriaBuilder;

public interface RentRepository extends JpaRepository<Rent,Integer> {}
