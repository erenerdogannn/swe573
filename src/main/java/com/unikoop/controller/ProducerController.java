package com.unikoop.controller;

import com.unikoop.model.Producer;
import com.unikoop.repository.ProducerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Eren on 15/05/16.
 */
@RestController
@RequestMapping(value="/producers")
public class ProducerController {

    @Autowired
    ProducerRepository producerRepository;


    /**
     *
     * @return Iterable Producer object
     * @should invoke findAll method of producer repository
     * @should return what producer repository returns
     */
    @RequestMapping(value= {"", "/"}, method= RequestMethod.GET)
    public Iterable<Producer> getProducers() {

        return producerRepository.findAll();
    }


    @RequestMapping(value= "/{id}", method= RequestMethod.GET)
    public Producer getProducer(@PathVariable("id") short id) {

        return producerRepository.findOne(id);
    }


    @RequestMapping(value= {"/add"}, method= RequestMethod.POST)
    public Producer addProducer(@RequestBody Producer producer) {

        return producerRepository.save(producer);
    }

    @RequestMapping(value= {"/update/{id}"}, method= RequestMethod.PUT)
    public void updateProducer(@PathVariable("id") short id, @RequestBody Producer updatedProducer) {

        Producer existingProducer = producerRepository.findOne(id);

        if (updatedProducer.getName() != null)
            existingProducer.setName(updatedProducer.getName());
        if (updatedProducer.getRegion() != null)
            existingProducer.setRegion(updatedProducer.getRegion());
        if (updatedProducer.getInfo() != null)
            existingProducer.setInfo(updatedProducer.getInfo());
        if (updatedProducer.getPhotoURL() != null)
            existingProducer.setPhotoURL(updatedProducer.getPhotoURL());

        producerRepository.save(existingProducer);

    }

    @RequestMapping(value= "/delete/{id}", method= RequestMethod.DELETE)
    public void deleteProducer(@PathVariable("id") short id) {

        producerRepository.delete(id);
    }

}
