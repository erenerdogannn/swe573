package com.unikoop.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Eren on 09/05/16.
 */
@Data
@Entity
public class Announcement {
    @Id
    @GeneratedValue
    private int id;

    private String name;

    private Date announcementDate;

    @Column(columnDefinition = "VARCHAR(2048)")
    private String info;

    @ManyToOne
    @JsonIgnore
    private Product product;

    @ManyToOne
    @JsonIgnore
    private Producer producer;

    /*
    * private String PhotoURL;
    * */
}
