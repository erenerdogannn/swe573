package com.unikoop.controller;

import com.unikoop.model.Sale;
import com.unikoop.repository.SaleRepository;
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
public class SaleControllerTest {

    @Mock
    SaleRepository saleRepository;

    @Mock
    private ArrayList<Sale> saleList;

    @InjectMocks
    SaleController saleController;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
    }
    /**
     * @verifies invoke findAll method of sale repository
     * @see SaleController#getSales()
     */
    @Test
    public void getSales_shouldInvokeFindAllMethodOfSaleRepository() throws Exception {
        saleController.getSales();
        verify(saleRepository, times(1)).findAll();
    }

    /**
     * @verifies return what sale repository returns
     * @see SaleController#getSales()
     */
    @Test
    public void getSales_shouldReturnWhatSaleRepositoryReturns() throws Exception {
        when(saleRepository.findAll()).thenReturn(saleList);
        assertEquals(saleController.getSales(), saleList);
    }
}
