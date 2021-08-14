package lk.arshad.rentcloud.rentservice.service;

import lk.arshad.rentcloud.model.rent.Rent;
import lk.arshad.rentcloud.rentservice.model.DetailResponse;

import java.util.List;

public interface RentService {
	Rent save(Rent customer);

	Rent findById(int id);

	List<Rent> findAll();

	DetailResponse findDetailResponse(int id);
}
