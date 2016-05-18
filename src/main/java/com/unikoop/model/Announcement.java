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
    private short id;

    private String name;

    private Date announcementDate;

    @Column(columnDefinition = "TEXT")
    private String info;

    @Column(columnDefinition = "VARCHAR(2048)")
    private String PhotoURL;

    @ManyToOne
    private Product product;

    @ManyToOne
    private Producer producer;

}
