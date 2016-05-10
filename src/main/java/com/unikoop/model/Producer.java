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
public class Producer {

    @Id
    @GeneratedValue
    private int id;

    @Column(columnDefinition = "VARCHAR(2048)")
    private String name;
    private String region;

    @Column(columnDefinition = "VARCHAR(2048)")
    private String info;

    @OneToMany(mappedBy = "producer")
    private List<Product> products;

    @OneToMany(mappedBy = "producer")
    private List<Announcement> announcements;

    @OneToMany(mappedBy = "producer")
    private List<Event> events;

    /*
    private String photoURL;
    */
}
