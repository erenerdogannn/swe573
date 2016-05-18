package com.unikoop.controller;

import com.unikoop.model.WorkSlot;
import com.unikoop.repository.WorkSlotRepository;
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
public class WorkSlotControllerTest {

    @Mock
    WorkSlotRepository workSlotRepository;

    @Mock
    private ArrayList<WorkSlot> workSlotList;

    @InjectMocks
    WorkSlotController workSlotController;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
    }

    /**
     * @verifies invoke findAll method of user repository
     * @see WorkSlotController#getWorkSlots()
     */
    @Test
    public void getWorkSlots_shouldInvokeFindAllMethodOfUserRepository() throws Exception {
        workSlotController.getWorkSlots();
        verify(workSlotRepository, times(1)).findAll();
    }

    /**
     * @verifies return what user repository returns
     * @see WorkSlotController#getWorkSlots()
     */
    @Test
    public void getWorkSlots_shouldReturnWhatUserRepositoryReturns() throws Exception {
        when(workSlotRepository.findAll()).thenReturn(workSlotList);
        assertEquals(workSlotController.getWorkSlots(), workSlotList);

    }
}
