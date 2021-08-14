package lk.arshad.rentcloud.vehicleservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lk.arshad.rentcloud.model.vehicle.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle,Integer> {
}
