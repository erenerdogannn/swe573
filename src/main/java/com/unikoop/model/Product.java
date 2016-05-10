package com.unikoop.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Eren on 09/05/16.
 */

@Data
@Entity
public class Product {

    @Id
    @GeneratedValue
    private int id;

    @Column(columnDefinition = "VARCHAR(2048)")
    private String name;
    private int price;
    private String region;

    @Column(columnDefinition = "VARCHAR(2048)")
    private String info;

    private int amount;
    private String measurement;
    private boolean isPackaged;
    private boolean packageSize;
    private int numOfPackage;
    private float unitPrice;

    @OneToMany(mappedBy = "product")
    private List<Announcement> announcements;

    @OneToMany(mappedBy = "product")
    private List<Event> events;

    @OneToMany(mappedBy = "product")
    private List<Sale> sales;

    /*
    private String photoURL;
    */

    @ManyToOne
    @JsonIgnore
    private Producer producer;
}
