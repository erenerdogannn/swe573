package com.unikoop.controller;

import com.unikoop.model.Comment;
import com.unikoop.model.Event;
import com.unikoop.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Eren on 21/05/16.
 */
@CrossOrigin
@RestController
@RequestMapping(value="/comments")
public class CommentController {

    @Autowired
    CommentRepository commentRepository;

    /**
     *
     * @return Iterable Comment object
     * @should invoke findAll method of comment repository
     * @should return what comment repository returns
     */
    @RequestMapping(value= {"", "/"}, method= RequestMethod.GET)
    public Iterable<Comment> getComments() {

        return commentRepository.findAll();
    }


    @RequestMapping(value= "/{id}", method= RequestMethod.GET)
    public Comment getComment(@PathVariable("id") short id) {

        return commentRepository.findOne(id);
    }

    /**
     * @param comment to be saved
     * @should invoke save method of comment repository
     */
    @RequestMapping(value= {"/add"}, method= RequestMethod.POST, consumes="application/json", produces="application/json")
    public Comment addComment(@RequestBody Comment comment) {

        return commentRepository.save(comment);
    }
}
