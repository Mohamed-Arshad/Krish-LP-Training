package lk.arshad.rentcloud.vehicleservice.service;

import java.util.List;

import lk.arshad.rentcloud.model.vehicle.Vehicle;

public interface VehicleService {
    Vehicle save(Vehicle customer);

    Vehicle findById(int id);

    List<Vehicle> findAll();
}
