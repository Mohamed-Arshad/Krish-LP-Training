package com.arshad.rentcloud.authorizationserver.repository;

import com.arshad.rentcloud.authorizationserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

//import javax.jws.soap.SOAPBinding;
import java.util.Optional;

public interface UserDetailRepository extends JpaRepository<User,Integer> {


    Optional<User> findByUsername(String name);

}
