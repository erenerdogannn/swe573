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
    private short id;

    @Column(columnDefinition = "VARCHAR(2048)")
    private String name;
    private String region;

    @Column(columnDefinition = "TEXT")
    private String info;

    @Column(columnDefinition = "MEDIUMTEXT")
    private String photoURL;

    @OneToMany(mappedBy = "producer")
    @JsonIgnore
    private List<Product> products;

    @OneToMany(mappedBy = "producer")
    @JsonIgnore
    private List<Announcement> announcements;

    @OneToMany(mappedBy = "producer")
    @JsonIgnore
    private List<Event> events;

}
