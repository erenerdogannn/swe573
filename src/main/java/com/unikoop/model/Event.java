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
    private int id;

    private String name;
    private String location;

    @Column
    @Type(type="timestamp")
    private Date eventDate;

    @Column(columnDefinition = "VARCHAR(2048)")
    private String info;

    @ManyToOne
    @JsonIgnore
    private Product product;

    @ManyToOne
    @JsonIgnore
    private Producer producer;

    /*
    private String PhotoURL;
    */

}
