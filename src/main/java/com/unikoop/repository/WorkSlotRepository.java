package com.unikoop.repository;

import com.unikoop.model.WorkSlot;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Eren on 15/05/16.
 */
@Repository
public interface WorkSlotRepository extends CrudRepository<WorkSlot, Short>{
}
