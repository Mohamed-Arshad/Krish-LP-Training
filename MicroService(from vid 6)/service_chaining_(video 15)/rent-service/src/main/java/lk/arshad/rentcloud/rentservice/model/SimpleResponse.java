package lk.arshad.rentcloud.rentservice.model;

import lk.arshad.rentcloud.model.rent.Rent;

public class SimpleResponse implements Response {

	Rent rent;

	public SimpleResponse(Rent rent) {
		this.rent = rent;
	}

	public Rent getRent() {
		return rent;
	}

	public void setRent(Rent rent) {
		this.rent = rent;
	}
}
