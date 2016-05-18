package com.unikoop.repository;

import com.unikoop.model.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Eren on 15/05/16.
 */
@Repository
public interface ProductRepository extends CrudRepository<Product, Short> {

}
