package com.unikoop.controller;

import com.unikoop.model.Event;
import com.unikoop.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Eren on 15/05/16.
 */
@RestController
@RequestMapping(value="/events")
public class EventController {

    @Autowired
    EventRepository eventRepository;

    /**
     *
     * @return Iterable Event object
     * @should invoke findAll method of event repository
     * @should return what event repository returns
     */
    @RequestMapping(value= {"", "/"}, method= RequestMethod.GET)
    public Iterable<Event> getEvents() {

        return eventRepository.findAll();
    }


    @RequestMapping(value= "/{id}", method= RequestMethod.GET)
    public Event getEvent(@PathVariable("id") short id) {

        return eventRepository.findOne(id);
    }


    @RequestMapping(value= {"/add"}, method= RequestMethod.POST)
    public Event addEvent(@RequestBody Event event) {

        return eventRepository.save(event);
    }

    /*TODO: Get top 5 might be needed*/
}
