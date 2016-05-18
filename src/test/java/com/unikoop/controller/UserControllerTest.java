package com.unikoop.controller;

import com.unikoop.model.User;
import com.unikoop.repository.UserRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

/**
 * Created by Eren on 18/05/16.
 */
public class UserControllerTest {

    @Mock
    UserRepository userRepository;

    @Mock
    private ArrayList<User> userList;

    @InjectMocks
    UserController userController;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
    }

    /**
     * @verifies invoke findAll method of user repository
     * @see UserController#getUsers()
     */
    @Test
    public void getUsers_shouldInvokeFindAllMethodOfUserRepository() throws Exception {
        userController.getUsers();
        verify(userRepository, times(1)).findAll();

    }

    /**
     * @verifies return what user repository returns
     * @see UserController#getUsers()
     */
    @Test
    public void getUsers_shouldReturnWhatUserRepositoryReturns() throws Exception {
        when(userRepository.findAll()).thenReturn(userList);
        assertEquals(userController.getUsers(), userList);

    }
}
