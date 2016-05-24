package com.unikoop.controller;

import com.unikoop.model.Announcement;
import com.unikoop.repository.AnnouncementRepository;
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
 * Created by Eren on 17/05/16.
 */
public class AnnouncementControllerTest {

    @Mock
    AnnouncementRepository announcementRepository;

    @Mock
    private ArrayList<Announcement> announcementList;

    @Mock
    private Announcement announcement;

    @InjectMocks
    AnnouncementController announcementController;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
    }

    /**
     * @verifies invoke findAll method of announcement repository
     * @see AnnouncementController#getAnnouncements()
     */
    @Test
    public void getAnnouncements_shouldInvokeFindAllMethodOfAnnouncementRepository() throws Exception {

        announcementController.getAnnouncements();
        verify(announcementRepository, times(1)).findAll();
    }

    /**
     * @verifies return what announcement repository returns
     * @see AnnouncementController#getAnnouncements()
     */
    @Test
    public void getAnnouncements_shouldReturnWhatAnnouncementRepositoryReturns() throws Exception {
        when(announcementRepository.findAll()).thenReturn(announcementList);
        assertEquals(announcementController.getAnnouncements(), announcementList);

    }

    /**
     * @verifies invoke save method of announcement repository
     * @see AnnouncementController#addAnnouncement(Announcement)
     */
    @Test
    public void addAnnouncement_shouldInvokeSaveMethodOfAnnouncementRepository() throws Exception {
        announcementController.addAnnouncement(announcement);
        verify(announcementRepository, times(1)).save(announcement);
    }
}
