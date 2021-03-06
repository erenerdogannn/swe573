package com.unikoop.controller;

import com.unikoop.model.Sale;
import com.unikoop.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Eren on 15/05/16.
 */
@CrossOrigin
@RestController
@RequestMapping(value="/sales")
public class SaleController {

    @Autowired
    SaleRepository saleRepository;

    /**
     *
     * @return Iterable Sale object
     * @should invoke findAll method of sale repository
     * @should return what sale repository returns
     */
    @RequestMapping(value= {"", "/"}, method= RequestMethod.GET)
    public Iterable<Sale> getSales() {

        return saleRepository.findAll();
    }


    @RequestMapping(value= "/{id}", method= RequestMethod.GET)
    public Sale getSale(@PathVariable("id") short id) {

        return saleRepository.findOne(id);
    }

    /**
     * @param sale to be saved
     * @should invoke save method of sale repository
     */
    @RequestMapping(value= {"/add"}, method= RequestMethod.POST, consumes="application/json", produces="application/json")
    public Sale addSale(@RequestBody Sale sale) {

        return saleRepository.save(sale);
    }
}
