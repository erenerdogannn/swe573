package com.unikoop.controller;

import com.unikoop.model.User;
import com.unikoop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Eren on 15/05/16.
 */
@CrossOrigin
@RestController
@RequestMapping(value="/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    /**
     *
     * @return Iterable User object
     * @should invoke findAll method of user repository
     * @should return what user repository returns
     */
    @RequestMapping(value= {"", "/"}, method= RequestMethod.GET)
    public Iterable<User> getUsers() {

        return userRepository.findAll();
    }


    @RequestMapping(value= "/{id}", method= RequestMethod.GET)
    public User getUser(@PathVariable("id") short id) {

        return userRepository.findOne(id);
    }


    @RequestMapping(value= {"/add"}, method= RequestMethod.POST, consumes="application/json", produces="application/json")
    public User addUser(@RequestBody User user) {

        return userRepository.save(user);
    }

    @RequestMapping(value= {"/update/{id}"}, method= RequestMethod.PUT)
    public boolean updateUser(@PathVariable("id") short id, @RequestBody User updatedUser) {

        User existingUser = userRepository.findOne(id);

        if (updatedUser.getName() != null)
            existingUser.setName(updatedUser.getName());

        if (updatedUser.getEmail() != null)
            existingUser.setEmail(updatedUser.getEmail());
        if (updatedUser.getPassword() != null)
            existingUser.setPassword(updatedUser.getPassword());

        if (updatedUser.getJob() != null)
            existingUser.setJob(updatedUser.getJob());

        if (updatedUser.getAge() != null)
            existingUser.setAge(updatedUser.getAge());

        if (updatedUser.getUserType() != null)
            existingUser.setUserType(updatedUser.getUserType());

        if (updatedUser.getPhotoURL() != null)
            existingUser.setPhotoURL(updatedUser.getPhotoURL());

        userRepository.save(existingUser);

        return true;
    }

    /**
     * @param id of the user that will be deleted
     * @should invoke delete method of user repository with given id
     */
    @RequestMapping(value= "/delete/{id}", method= RequestMethod.DELETE)
    public boolean deleteUser(@PathVariable("id") short id) {

        userRepository.delete(id);

        return true;
    }


}
