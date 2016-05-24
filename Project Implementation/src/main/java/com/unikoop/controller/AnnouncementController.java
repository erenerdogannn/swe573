package com.unikoop.controller;

import com.unikoop.model.Announcement;
import com.unikoop.repository.AnnouncementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


/**
 * Created by Eren on 15/05/16.
 */
@CrossOrigin
@RestController
@RequestMapping(value="/announcements")
public class AnnouncementController {

    @Autowired
    AnnouncementRepository announcementRepository;

    /**
     * @return Iterable Announcement object
     * @should invoke findAll method of announcement repository
     * @should return what announcement repository returns
     */
    @RequestMapping(value= {"", "/"}, method= RequestMethod.GET)
    public Iterable<Announcement> getAnnouncements() {

        return announcementRepository.findAll();
    }


    @RequestMapping(value= "/{id}", method= RequestMethod.GET)
    public Announcement getAnnouncement(@PathVariable("id") short id) {

        return announcementRepository.findOne(id);
    }

    /**
     * @param announcement to be saved
     * @should invoke save method of announcement repository
     */
    @RequestMapping(value= {"/add"}, method= RequestMethod.POST, consumes="application/json", produces="application/json")
    public Announcement addAnnouncement(@RequestBody Announcement announcement) {

        return announcementRepository.save(announcement);
    }

    /*TODO: Get top 5 might be needed.*/

}
