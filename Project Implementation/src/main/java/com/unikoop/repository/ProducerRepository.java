package com.unikoop.repository;

import com.unikoop.model.Producer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Eren on 15/05/16.
 */
@Repository
public interface ProducerRepository extends CrudRepository<Producer, Short> {
}
