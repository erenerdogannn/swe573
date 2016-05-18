package com.unikoop.controller;

import com.unikoop.model.Product;
import com.unikoop.repository.ProductRepository;
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
public class ProductControllerTest {


    @Mock
    ProductRepository productRepository;

    @Mock
    private ArrayList<Product> productList;

    @InjectMocks
    ProductController productController;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
    }

    /**
     * @verifies invoke findAll method of product repository
     * @see ProductController#getProducts()
     */
    @Test
    public void getProducts_shouldInvokeFindAllMethodOfProductRepository() throws Exception {
        productController.getProducts();
        verify(productRepository, times(1)).findAll();
    }

    /**
     * @verifies return what product repository returns
     * @see ProductController#getProducts()
     */
    @Test
    public void getProducts_shouldReturnWhatProductRepositoryReturns() throws Exception {
        when(productRepository.findAll()).thenReturn(productList);
        assertEquals(productController.getProducts(), productList);
    }
}
