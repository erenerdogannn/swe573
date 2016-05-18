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
    private short id;

    @Column(columnDefinition = "VARCHAR(2048)")
    private String name;
    private String region;

    @Column(columnDefinition = "TEXT")
    private String info;

    private String measurement;
    private String isPackaged;

    private int packageSize;
    private int numOfPackage;

    private int totalAmount;
    private float price;

    @Column(columnDefinition = "VARCHAR(2048)")
    private String photoURL;


    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private List<Announcement> announcements;

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private List<Event> events;

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private List<Sale> sales;

    @ManyToOne
    private Producer producer;
}
