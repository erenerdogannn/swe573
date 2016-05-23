package com.unikoop.controller;

import com.unikoop.model.Comment;
import com.unikoop.repository.CommentRepository;
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
 * Created by Eren on 21/05/16.
 */
public class CommentControllerTest {

    @Mock
    CommentRepository commentRepository;

    @Mock
    private ArrayList<Comment> commentList;

    @Mock
    private Comment comment;

    @InjectMocks
    CommentController commentController;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
    }


    /**
     * @verifies invoke findAll method of comment repository
     * @see CommentController#getComments()
     */
    @Test
    public void getComments_shouldInvokeFindAllMethodOfCommentRepository() throws Exception {
        commentController.getComments();
        verify(commentRepository, times(1)).findAll();
    }

    /**
     * @verifies return what comment repository returns
     * @see CommentController#getComments()
     */
    @Test
    public void getComments_shouldReturnWhatCommentRepositoryReturns() throws Exception {
        when(commentRepository.findAll()).thenReturn(commentList);
        assertEquals(commentController.getComments(), commentList);
    }

    /**
     * @verifies invoke save method of comment repository
     * @see CommentController#addComment(com.unikoop.model.Comment)
     */
    @Test
    public void addComment_shouldInvokeSaveMethodOfCommentRepository() throws Exception {
        commentController.addComment(comment);
        verify(commentRepository, times(1)).save(comment);
    }
}
