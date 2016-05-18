package com.unikoop.controller;

import com.unikoop.model.Producer;
import com.unikoop.repository.ProducerRepository;
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
public class ProducerControllerTest {


    @Mock
    ProducerRepository producerRepository;

    @Mock
    private ArrayList<Producer> producerList;

    @InjectMocks
    ProducerController producerController;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
    }


    /**
     * @verifies invoke findAll method of producer repository
     * @see ProducerController#getProducers()
     */
    @Test
    public void getProducers_shouldInvokeFindAllMethodOfProducerRepository() throws Exception {
        producerController.getProducers();
        verify(producerRepository, times(1)).findAll();
    }


    /**
     * @verifies return what producer repository returns
     * @see ProducerController#getProducers()
     */
    @Test
    public void getProducers_shouldReturnWhatProducerRepositoryReturns() throws Exception {
        when(producerRepository.findAll()).thenReturn(producerList);
        assertEquals(producerController.getProducers(), producerList);
    }
}
