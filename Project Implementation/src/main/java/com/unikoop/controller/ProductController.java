package com.unikoop.controller;

import com.unikoop.model.Producer;
import com.unikoop.model.Product;
import com.unikoop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Eren on 15/05/16.
 */
@CrossOrigin
@RestController
@RequestMapping(value="/products")
public class ProductController {

    @Autowired
    ProductRepository productRepository;


    /**
     *
     * @return Iterable Product object
     * @should invoke findAll method of product repository
     * @should return what product repository returns
     */
    @RequestMapping(value= {"", "/"}, method= RequestMethod.GET)
    public Iterable<Product> getProducts() {

        return productRepository.findAll();
    }


    /**
     * @param id of the product
     * @return Product object with the given id
     * @should invoke findOne method of product repository with given id
     * @should return what product repository returns
     */
    @RequestMapping(value= {"/{id}"}, method= RequestMethod.GET)
    public Product getProduct(@PathVariable("id") short id) {

        return productRepository.findOne(id);
    }

    /**
     * @param product to be saved
     * @should invoke save method of product repository
     */
    @RequestMapping(value= {"/add"}, method= RequestMethod.POST, consumes="application/json", produces="application/json")
    public Product addProduct(@RequestBody Product product) {

        return productRepository.save(product);
    }

    @RequestMapping(value= {"/update/{id}"}, method= RequestMethod.PUT, consumes="application/json", produces="application/json")
    public boolean updateProduct(@PathVariable("id") short id, @RequestBody Product updatedProduct) {

        Product existingProduct = productRepository.findOne(id);

        if (updatedProduct.getName() != null)
            existingProduct.setName(updatedProduct.getName());

        if (updatedProduct.getRegion() != null)
            existingProduct.setRegion(updatedProduct.getRegion());

        if (updatedProduct.getInfo() != null)
            existingProduct.setInfo(updatedProduct.getInfo());

        if (updatedProduct.getMeasurement() != null)
            existingProduct.setMeasurement(updatedProduct.getMeasurement());

        if (updatedProduct.getIsPackaged() != null)
            existingProduct.setIsPackaged(updatedProduct.getIsPackaged());

        if (updatedProduct.getPackageSize() != 0)
            existingProduct.setPackageSize(updatedProduct.getPackageSize());

        if (updatedProduct.getNumOfPackage() > -1)
            existingProduct.setNumOfPackage(updatedProduct.getNumOfPackage());

        if (updatedProduct.getTotalAmount() > -1)
            existingProduct.setTotalAmount(updatedProduct.getTotalAmount());

        if (updatedProduct.getPrice() != 0)
            existingProduct.setPrice(updatedProduct.getPrice());

        if (updatedProduct.getPhotoURL() != null)
            existingProduct.setPhotoURL(updatedProduct.getPhotoURL());

        productRepository.save(existingProduct);

        return true;

    }

    /**
     * @param id of the product that will be deleted
     * @should invoke delete method of product repository with given id
     */
    @RequestMapping(value= "/delete/{id}", method= RequestMethod.DELETE)
    public void deleteProduct(@PathVariable("id") short id) {

        productRepository.delete(id);
    }
}
