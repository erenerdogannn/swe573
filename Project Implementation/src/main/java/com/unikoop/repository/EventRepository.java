package com.unikoop.repository;

import com.unikoop.model.Event;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Eren on 15/05/16.
 */

@Repository
public interface EventRepository extends CrudRepository<Event, Short> {
}
