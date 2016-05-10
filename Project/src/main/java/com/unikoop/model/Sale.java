package com.unikoop.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

/**
 * Created by Eren on 09/05/16.
 */
@Data
@Entity
public class Sale {

    @Id
    @GeneratedValue
    private int id;

    private int amount;

    @ManyToOne
    @JsonIgnore
    private Product product;

}
