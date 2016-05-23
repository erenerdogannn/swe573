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

    @Mock
    private Product product;

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

    /**
     * @verifies invoke delete method of product repository with given id
     * @see ProductController#deleteProduct(short)
     */
    @Test
    public void deleteProduct_shouldInvokeDeleteMethodOfProductRepositoryWithGivenId() throws Exception {
        productController.deleteProduct(anyShort());
        verify(productRepository, times(1)).delete(anyShort());
    }

    /**
     * @verifies invoke save method of product repository
     * @see ProductController#addProduct(Product)
     */
    @Test
    public void addProduct_shouldInvokeSaveMethodOfProductRepository() throws Exception {
        productController.addProduct(product);
        verify(productRepository, times(1)).save(product);
    }

    /**
     * @verifies invoke findOne method of product repository with given id
     * @see ProductController#getProduct(short)
     */
    @Test
    public void getProduct_shouldInvokeFindOneMethodOfProductRepositoryWithGivenId() throws Exception {
        productController.getProduct(anyShort());
        verify(productRepository, times(1)).findOne(anyShort());
    }

    /**
     * @verifies return what product repository returns
     * @see ProductController#getProduct(short)
     */
    @Test
    public void getProduct_shouldReturnWhatProductRepositoryReturns() throws Exception {
        when(productController.getProduct(anyShort())).thenReturn(product);
        assertEquals(productController.getProduct((short) 1), product);
    }
}
