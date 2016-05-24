package com.unikoop.controller;

import com.unikoop.model.Event;
import com.unikoop.repository.EventRepository;
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
public class EventControllerTest {


    @Mock
    EventRepository eventRepository;

    @Mock
    private ArrayList<Event> eventList;

    @Mock
    private Event event;

    @InjectMocks
    EventController eventController;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
    }

    /**
     * @verifies invoke findAll method of event repository
     * @see EventController#getEvents()
     */
    @Test
    public void getEvents_shouldInvokeFindAllMethodOfEventRepository() throws Exception {
        eventController.getEvents();
        verify(eventRepository, times(1)).findAll();
    }

    /**
     * @verifies return what event repository returns
     * @see EventController#getEvents()
     */
    @Test
    public void getEvents_shouldReturnWhatEventRepositoryReturns() throws Exception {
        when(eventRepository.findAll()).thenReturn(eventList);
        assertEquals(eventController.getEvents(), eventList);
    }

    /**
     * @verifies invoke save method of event repository
     * @see EventController#addEvent(Event)
     */
    @Test
    public void addEvent_shouldInvokeSaveMethodOfEventRepository() throws Exception {
        eventController.addEvent(event);
        verify(eventRepository, times(1)).save(event);
    }
}
