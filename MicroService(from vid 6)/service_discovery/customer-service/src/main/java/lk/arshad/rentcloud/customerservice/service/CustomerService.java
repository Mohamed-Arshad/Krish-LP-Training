package lk.arshad.rentcloud.customerservice.service;

import lk.arshad.rentcloud.model.customer.Customer;

import java.util.List;

public interface CustomerService {
    Customer save(Customer customer);

    Customer findById(int id);

    List<Customer> findAll();
}
