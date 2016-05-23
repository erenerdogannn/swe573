package com.unikoop.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

/**
 * Created by Eren on 21/05/16.
 */
@Data
@Entity
public class Comment {

    @Id
    @GeneratedValue
    private short id;

    @Column(columnDefinition = "TEXT")
    private String content;

    @ManyToOne
    private User user;

    @ManyToOne
    private Product product;
}
