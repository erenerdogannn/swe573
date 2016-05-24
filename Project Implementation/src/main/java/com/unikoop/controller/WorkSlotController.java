package com.unikoop.controller;

import com.unikoop.model.User;
import com.unikoop.model.WorkSlot;
import com.unikoop.repository.WorkSlotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Eren on 15/05/16.
 */
@CrossOrigin
@RestController
@RequestMapping(value="/workslots")
public class WorkSlotController {

    @Autowired
    WorkSlotRepository workSlotRepository;


    /**
     * @return Iterable User object
     * @should invoke findAll method of user repository
     * @should return what user repository returns
     */
    @RequestMapping(value= {"", "/"}, method= RequestMethod.GET)
    public Iterable<WorkSlot> getWorkSlots() {

        return workSlotRepository.findAll();
    }


    @RequestMapping(value= "/{id}", method= RequestMethod.GET)
    public WorkSlot getWorkSlot(@PathVariable("id") short id) {

        return workSlotRepository.findOne(id);
    }


    /**
     * @param workSlot to be saved
     * @should invoke save method of workSlot repository
     */
    @RequestMapping(value= {"/add"}, method= RequestMethod.POST, consumes="application/json", produces="application/json")
    public WorkSlot addWorkSlot(@RequestBody WorkSlot workSlot) {

        return workSlotRepository.save(workSlot);
    }

    @RequestMapping(value= {"/update/{id}"}, method= RequestMethod.PUT)
    public boolean updateWorkSlot(@PathVariable("id") short id, @RequestBody WorkSlot updatedWorkSlot) {

        WorkSlot existingWorkSlot = workSlotRepository.findOne(id);

        if (updatedWorkSlot.getTimeStart() != null)
            existingWorkSlot.setTimeStart(updatedWorkSlot.getTimeStart());

        if (updatedWorkSlot.getJob() != null)
            existingWorkSlot.setJob(updatedWorkSlot.getJob());

        workSlotRepository.save(existingWorkSlot);

        return true;
    }


    @RequestMapping(value= "/delete/{id}", method= RequestMethod.DELETE)
    public void deleteWorkSlot(@PathVariable("id") short id) {

        workSlotRepository.delete(id);
    }

}
