package com.unikoop.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.security.Timestamp;
import java.util.Date;

/**
 * Created by Eren on 09/05/16.
 */
@Data
@Entity
public class Event {

    @Id
    @GeneratedValue
    private short id;

    private String name;
    private String location;

    private String eventDate;

    @Column(columnDefinition = "TEXT")
    private String info;

    @ManyToOne
    private Product product;

    @ManyToOne
    private Producer producer;



}
